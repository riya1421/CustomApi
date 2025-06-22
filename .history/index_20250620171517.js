
const express = require("express");
const app = express();
const db = require("./db");

const PORT = 8000;
app.use(express.json());
app.use(express.static("public"));

// Get all users
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get user by ID
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
});

// Create new user
app.post("/api/users", (req, res) => {
  const { first_name, last_name, email, gender } = req.body;
  db.query(
    "INSERT INTO users (first_name, last_name, email, gender) VALUES (?, ?, ?, ?)",
    [first_name, last_name, email, gender],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, first_name, last_name, email, gender });
    }
  );
});

// Update user by ID
app.patch("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, gender } = req.body;
  db.query(
    "UPDATE users SET first_name = ?, last_name = ?, email = ?, gender = ? WHERE id = ?",
    [first_name, last_name, email, gender, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "User updated successfully" });
    }
  );
});

// Delete user by ID
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server Started at Port: ${PORT}`);
});
