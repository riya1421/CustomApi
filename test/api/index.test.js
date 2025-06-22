const request = require("supertest");
const app = require("../../index");
const db = require("../../db");

describe("API Tests", () => {
  let insertedUserId;

  it("GET /api/users → should return users array", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/users → should create a new user", async () => {
    const newUser = {
      first_name: "API",
      last_name: "Test",
      email: "api.test@example.com",
      gender: "Other"
    };

    const res = await request(app).post("/api/users").send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    insertedUserId = res.body.id;
  });

  it("GET /api/users/:id → should return created user", async () => {
    const res = await request(app).get(`/api/users/${insertedUserId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email", "api.test@example.com");
  });

  it("PATCH /api/users/:id → should update user info", async () => {
    const updated = {
      first_name: "Updated",
      last_name: "Name",
      email: "updated@example.com",
      gender: "Non-binary"
    };

    const res = await request(app)
      .patch(`/api/users/${insertedUserId}`)
      .send(updated);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User updated successfully");
  });

  it("DELETE /api/users/:id → should delete user", async () => {
    const res = await request(app).delete(`/api/users/${insertedUserId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User deleted successfully");
  });

  it("GET /api/users/:id → after delete should return 404", async () => {
    const res = await request(app).get(`/api/users/${insertedUserId}`);
    expect(res.statusCode).toBe(404);
  });

  
  afterAll((done) => {
    db.end((err) => {
      if (err) console.error("Error closing DB:", err.message);
      done();
    });
  });
});
