const db = require('../../db');

describe('Import Integration Test', () => {
  const testUser = {
    first_name: 'Test',
    last_name: 'User',
    email: 'testuser@example.com',
    gender: 'Other'
  };

  afterAll((done) => {
    db.end((err) => {
      if (err) console.error("❌ DB close failed:", err.message);
      done();
    });
  });

  test('should insert and find a user', (done) => {
    db.query(
      'INSERT INTO users (first_name, last_name, email, gender) VALUES (?, ?, ?, ?)',
      [testUser.first_name, testUser.last_name, testUser.email, testUser.gender],
      (err, result) => {
        expect(err).toBeNull();
        db.query('SELECT * FROM users WHERE id = ?', [result.insertId], (err, rows) => {
          expect(rows[0].email).toBe(testUser.email);
          // Clean up
          db.query('DELETE FROM users WHERE id = ?', [result.insertId], () => {
            done();
          });
        });
      }
    );
  });
});
