// test/unit/db.mock.test.js
const db = require("../../db");

// Mock the query function
jest.mock("../../db", () => ({
  query: jest.fn(),
  end: jest.fn()
}));

describe("Mocked DB Unit Tests", () => {
  test("should simulate successful query", (done) => {
    const mockData = [{ id: 1, first_name: "Mock", email: "mock@example.com" }];
    db.query.mockImplementation((sql, params, callback) => {
      callback(null, mockData);
    });

    db.query("SELECT * FROM users", [], (err, results) => {
      expect(err).toBeNull();
      expect(results[0].first_name).toBe("Mock");
      done();
    });
  });

  test("should simulate a DB error", (done) => {
    const fakeError = new Error("DB failed");
    db.query.mockImplementation((sql, params, callback) => {
      callback(fakeError, null);
    });

    db.query("SELECT * FROM users", [], (err, results) => {
      expect(err).toBeTruthy();
      expect(err.message).toBe("DB failed");
      done();
    });
  });
});
