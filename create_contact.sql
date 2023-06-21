BEGIN;

DROP TABLE IF EXISTS contact_leo;

CREATE TABLE IF NOT EXISTS contact_leo (
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    nom_entreprise VARCHAR(255),
    subject VARCHAR(255),
    message TEXT
);

COMMIT;