const fs = require("fs");
const db = require("./db");

// Read mock data from JSON file
const rawData = fs.readFileSync("MOCK_DATA.json");
const users = JSON.parse(rawData);

// Insert each user into the MySQL database
users.forEach((user) => {
  const { first_name, last_name, email, gender } = user;
  const query = `
    INSERT INTO users (first_name, last_name, email, gender)
    VALUES (?, ?, ?, ?)
  `;
  db.query(query, [first_name, last_name, email, gender], (err, result) => {
    if (err) {
      console.error("❌ Failed to insert user:", email, err.message);
    } else {
      console.log("✅ Inserted:", email);
    }
  });
});
