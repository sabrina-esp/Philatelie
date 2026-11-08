# Philatelie / Collecter moi!

An Angular 18 + Express/TypeScript prototype for browsing collectible stamps,
filtering products, viewing details, and using a temporary shopping cart.

## Run locally

Requires Node.js and npm. In separate terminals:

```sh
cd backend
npm ci
cp .env.example .env
# Replace JWT_SECRET in .env with a securely generated value.
npm run dev
```

```sh
cd frontend
npm ci
npm start
```

Visit http://localhost:4200. The Angular development proxy forwards `/api` to
http://localhost:5000. For production, configure your web server to serve the
Angular build and forward `/api` to the Express backend.

## Current scope

The catalog uses sample data; the cart is stored only in browser memory and
resets on reload. The visible login page is a placeholder and does not
authenticate. The backend has an experimental demo login endpoint based on
environment-provided password hashes; it is not connected to the UI, and it
does not protect any product routes. There is no checkout, payment, database,
or real user registration. Do not use this prototype to collect real passwords
or payments.

## Checks

`cd backend && npm run build` and `cd frontend && npm run build`.
