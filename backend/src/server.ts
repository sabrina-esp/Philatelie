
import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sample_produits, sample_users } from "./data";

const app = express();

const PORT = Number(process.env.PORT || 5000);
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:4200";
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in .env");
}

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);

// ==================== PRODUCTS ====================

app.get("/api/produit", (req, res) => {
  res.json(sample_produits);
});

app.get("/api/produit/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm.toLowerCase();

  const produits = sample_produits.filter((produit) =>
    produit.nom.toLowerCase().includes(searchTerm)
  );

  res.json(produits);
});


app.get("/api/produit/:produitId", (req, res): void => {
  const produitId = req.params.produitId;

  const produit = sample_produits.find(
    (produit) => produit.id === produitId
  );

  if (!produit) {
    res.status(404).json({
      message: "Product not found",
    });
    return;
  }

  res.json(produit);
});


// ==================== AUTHENTICATION ====================


app.post("/api/users/login", async (req, res): Promise<void> => {
  try {
    const { email, password } = req.body ?? {};

    if (typeof email !== "string" || typeof password !== "string") {
      res.status(400).json({
        message: "Email and password are required",
      });
      return;
    }

    const user = sample_users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      res.status(401).json({
        message: "Invalid email or password",
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      res.status(401).json({
        message: "Invalid email or password",
      });
      return;
    }

    const token = jwt.sign(
      {
        email: user.email,
        isAdmin: user.isAdmin,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
        algorithm: "HS256",
      }
    );

    res.status(200).json({
      name: user.name,
      email: user.email,
      address: user.address,
      isAdmin: user.isAdmin,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
});


// ==================== SERVER ====================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
