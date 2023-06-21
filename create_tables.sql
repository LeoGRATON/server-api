BEGIN;

-- Supprimer la table "works" & "blog" si elle existe
DROP TABLE IF EXISTS works;
DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS app_admin;
DROP TABLE IF EXISTS contact_leo;

-- Recréer la table "works" avec la nouvelle structure
CREATE TABLE works (
  id SERIAL PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  challenge TEXT NOT NULL,
  goal TEXT NOT NULL,
  result TEXT NOT NULL,
  img_maquette VARCHAR(255) NOT NULL,
  img_ref VARCHAR(255) NOT NULL,
  likes INT NOT NULL,
  couleurs JSON NOT NULL,
  typo1 VARCHAR(255) NOT NULL,
  typo2 VARCHAR(255) NOT NULL,
  timeline VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS blog (
  id SERIAL PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  titre VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  img_ref VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS app_admin ( 
    id SERIAL PRIMARY KEY,
    firstname text not null,
    lastname text not null,
    password text default 'password',
    email text default '@cuisto.fr'
);

CREATE TABLE IF NOT EXISTS contact_leo (
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    nom_entreprise VARCHAR(255),
    subject VARCHAR(255),
    message TEXT
);

-- Insérer des enregistrements fictifs dans la table "works"
INSERT INTO works (
  titre,
  description,
  challenge,
  goal,
  result,
  img_maquette,
  img_ref,
  likes,
  couleurs,
  typo1,
  typo2,
  timeline,
  url,
  website,
  category
) VALUES (
  'Site de e-commerce',
  'Site web permettant de vendre des produits en ligne',
  'Créer un site qui permette aux utilisateurs de parcourir et d''acheter des produits en ligne.',
  'Permettre aux utilisateurs de naviguer facilement dans le catalogue de produits, de trouver les informations dont ils ont besoin sur chaque produit, de les ajouter à leur panier et de finaliser leur achat.',
  'Un site web complet de commerce électronique, permettant aux utilisateurs de trouver et d''acheter des produits en ligne en toute simplicité.',
  '/img/maquette_ecommerce.png',
  '/img/ref_ecommerce.png',
  100,
  '{"couleur1": {"nom": "bleu", "hex": "#0074D9"}, "couleur2": {"nom": "vert", "hex": "#2ECC40"}, "couleur3": {"nom": "orange", "hex": "#FF851B"}, "couleur4": {"nom": "gris", "hex": "#AAAAAA"}}',
  'Open Sans',
  'Roboto',
  'Mai 2022',
  'https://monsiteecommerce.com',
  'Mon Site E-commerce',
  'E-commerce'
);

INSERT INTO blog (category, titre, text, author, img_ref)
VALUES ('Technologie', 'Comment utiliser PostgreSQL avec Node.js', 'Dans cet article, nous allons apprendre à utiliser PostgreSQL avec Node.js.', 'John Doe', 'image.png'),
       ('Sport', 'Les 10 meilleurs exercices pour les abdominaux', 'Découvrez les 10 meilleurs exercices pour travailler vos abdominaux.', 'Jane Smith', 'image2.png'),
       ('Cuisine', 'Recette de la tarte aux pommes', 'Voici une délicieuse recette de tarte aux pommes facile à réaliser.', 'Robert Johnson', 'image3.png');

INSERT INTO app_admin (firstname, lastname, password, email)
  VALUES ('Leo', 'GRATON','$2a$05$mxu3x9Az/bY4d5gl93pa2u1Guo1fGSMv6.p1Zn3dBZrgeQ47W6oqe', 'leo.graton2@gmail.com');

COMMIT;