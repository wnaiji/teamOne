var express = require('express');
var router = express.Router();
const { db, checkCityExists } = require('../app');

// Route POST pour ajouter un utilisateur
router.post('/', async (req, res) => {
  const { userName, age, localisation } = req.body;

  // Vérifier que toutes les données sont présentes
  if (!userName || !age || !localisation) {
    return res.status(400).json({ message: 'Veuillez fournir toutes les informations nécessaires.' });
  }

  // Vérification de la localisation (nom de la ville)
  try {
    const cityExists = await checkCityExists(localisation);
    if (!cityExists) {
      return res.status(400).json({ message: "La ville spécifiée n'existe pas." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Erreur lors de la vérification de la ville." });
  }

  // Insérer les informations de l'utilisateur dans la base de données
  db.run(`INSERT INTO users (userName, age, localisation) VALUES (?, ?, ?)`, [userName, age, localisation], function(err) {
    if (err) {
      return res.status(500).json({ message: "Erreur lors de l'insertion des données dans la base." });
    }
    res.status(200).json({ message: 'Les données de l’utilisateur ont été sauvegardées avec succès.', userId: this.lastID });
  });
});

// Route GET pour récupérer les utilisateurs
router.get('/', (req, res) => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Erreur lors de la récupération des données." });
    }
    res.status(200).json(rows);
  });
});


module.exports = router;
