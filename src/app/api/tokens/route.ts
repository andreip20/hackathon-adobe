import mysql from "mysql2";
import { NextApiRequest, NextApiResponse } from "next";

// Configure your MySQL connection
const db = mysql.createConnection({
  host: process.env.DATABASE_URL,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    console.log(body);
    db.query(
      "INSERT INTO users (tokens) VALUES (?)",
      [body.tokens],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: err.message });
        } else {
          res.status(200).json({ message: "Tokens updated" });
        }
      }
    );
  } else {
    if (req.method === "GET") {
      const body = JSON.parse(req.body);
      console.log(body);
      db.query("SELECT * FROM users WHERE id = ?", [body.id], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: err.message });
        } else {
          res.status(200).json(result);
        }
      });
    }
  }
}
