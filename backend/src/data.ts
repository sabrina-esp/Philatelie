export const sample_produits: any[] = [
  {
    id: "1",
    nom: "Timbre Commémoratif - Festival de Carthage 2024",
    description: "Timbre commémoratif célébrant le Festival de Carthage 2024.",
    prix: 7.0,
    favoris: true,
    origine: "Tunisie",
    stars: 4.5,
    imageUrl: "assets/timbre1.jpg",
  },
  {
    id: "2",
    nom: "Enveloppe Premier Jour -70éme anniversaire de Tunisair",
    description:
      "Enveloppe de premier jour avec des timbres représentant des lieux emblématiques de Tunis.",
    prix: 10.0,
    favoris: false,
    origine: "Tunisie",
    stars: 4.7,
    imageUrl: "./assets/enveloppe1.jpg",
  },
  {
    id: "3",
    nom: "Pochette de Collection - Sites Archéologiques Tunisiens",
    description:
      "Pochette de collection dédiée aux sites archéologiques de Tunisie.",
    prix: 18.0,
    favoris: true,
    origine: "Tunisie",
    stars: 3.5,
    imageUrl: "assets/pack.jpg",
  },
  {
    id: "4",
    nom: "Timbre Souvenir - Médina de Tunis",
    description:
      "Timbre souvenir représentant la Médina de Tunis, classée au patrimoine mondial.",
    prix: 5.5,
    favoris: false,
    origine: "Tunisie",
    stars: 5.0,
    imageUrl: "assets/timbre3.jpg",
  },
  {
    id: "5",
    nom: "Enveloppe Premier Jour - Ports puniques: port militaire et commercial de Carthage ",
    description:
      " Enveloppe de premier jour mettant en valeur le riche patrimoine civilisationnel et culturel qui caractérise notre pays depuis près de 3000 ans",
    prix: 12.0,
    favoris: true,
    origine: "Tunisie",
    stars: 4.0,
    imageUrl: "assets/enveloppe2.jpg",
  },
  {
    id: "6",
    nom: "Timbre Souvenir du Maroc",
    description: "Timbre souvenir du Maroc avec des motifs traditionnels.",
    prix: 8.0,
    favoris: false,
    origine: "Maroc",
    stars: 3.0,
    imageUrl: "assets/timbre4.jpg",
  },
];

export interface DemoUser {
  name: string;
  email: string;
  passwordHash: string;
  address: string;
  isAdmin: boolean;
}

export const sample_users: DemoUser[] = [
  {
    name: "Demo Admin",
    email: "admin@example.com",
    passwordHash: process.env.DEMO_ADMIN_PASSWORD_HASH || "",
    address: "Demo Address",
    isAdmin: true,
  },
  {
    name: "Demo User",
    email: "user@example.com",
    passwordHash: process.env.DEMO_USER_PASSWORD_HASH || "",
    address: "Demo Address",
    isAdmin: false,
  },
];
