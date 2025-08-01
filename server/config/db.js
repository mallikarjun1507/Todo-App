// config/db.js
const mysql = require('mysql2');
require('dotenv').config();

const initialConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Step 1: Ensure database exists
initialConnection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``, (err) => {
  if (err) {
    console.error('Error creating database:', err.message);
    return;
  }
  console.log(`Database '${process.env.DB_NAME}' ensured.`);
});

initialConnection.end(); // Close initial connection

// Step 2: Connect to the ensured DB
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Step 3: Connect and ensure table
db.connect((err) => {
  if (err) {
    console.error('MySQL DB connection failed:', err.message);
  } else {
    console.log(`Connected to MySQL database: ${process.env.DB_NAME}`);

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS todos (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        completed TINYINT(1) DEFAULT 0,
        PRIMARY KEY (id)
      )
    `;
    db.query(createTableQuery, (err) => {
      if (err) {
        console.error('Error creating todos table:', err.message);
      } else {
        console.log('Todos table ensured.');
      }
    });
  }
});

//  Step 4: Export the connection
module.exports = db;
