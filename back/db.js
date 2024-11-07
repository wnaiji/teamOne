const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sql');

// Modifier la table users pour inclure le code INSEE
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT NOT NULL,
    age INTEGER NOT NULL,
    localisation TEXT NOT NULL,
    inseeCode TEXT NOT NULL,
    department TEXT,
    region TEXT
  )`);
});

module.exports = db;
