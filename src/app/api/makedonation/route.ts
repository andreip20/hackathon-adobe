import mysql from "mysql2";

import { NextApiRequest, NextApiResponse } from "next";

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
      "INSERT INTO donations (id_donation, id_) VALUES (?)",
      [body.tokens],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: err.message });
        } else {
          res.status(200).json({ message: "Donations updated" });
        }
      }
    );

    db.query(
      "DELETE FROM needed_items WHERE id = ?",
      [body.id],
      (err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.status(200).json({ message: "Needed_items updated." });
        }
      }
    );
  } else {
  }
}
