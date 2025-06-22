const db = require("../../db");

describe("Unit Tests for MySQL Queries", () => {
  test("should add 1 + 1 correctly", (done) => {
    db.query("SELECT 1 + 1 AS result", (err, rows) => {
      expect(err).toBeNull();
      expect(rows[0].result).toBe(2);
      done();
    });
  });

  test("should handle SELECT from users", (done) => {
    db.query("SELECT * FROM users LIMIT 1", (err, results) => {
      expect(err).toBeNull();
      expect(Array.isArray(results)).toBe(true);
      done();
    });
  });

  test("should insert and delete a test user", (done) => {
    const user = {
      first_name: "Unit",
      last_name: "Test",
      email: "unit.test@example.com",
      gender: "Other"
    };

    db.query(
      "INSERT INTO users (first_name, last_name, email, gender) VALUES (?, ?, ?, ?)",
      [user.first_name, user.last_name, user.email, user.gender],
      (err, result) => {
        expect(err).toBeNull();
        db.query("DELETE FROM users WHERE id = ?", [result.insertId], (err, res2) => {
          expect(err).toBeNull();
          done();
        });
      }
    );
  });

  test("should fail gracefully on invalid SQL", (done) => {
    db.query("SELECT * FROM non_existing_table", (err, results) => {
      expect(err).not.toBeNull();
      expect(err.code).toBe("ER_NO_SUCH_TABLE");
      done();
    });
  });

  // ✅ This is the important part
  afterAll((done) => {
    db.end((err) => {
      if (err) console.error("Error closing DB connection:", err.message);
      done();
    });
  });
});
