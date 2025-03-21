const request = require("supertest");
const app = require("../index");
const Bug = require("../models/Bug");

describe("Bug API", () => {
  beforeEach(async () => {
    await Bug.deleteMany();
  });

  test("should create a new bug", async () => {
    const response = await request(app)
      .post("/api/bugs")
      .send({ title: "Test Bug", description: "This is a test bug" });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Test Bug");
  });

  test("should get all bugs", async () => {
    await Bug.create({ title: "Bug 1", description: "Description 1" });
    const response = await request(app).get("/api/bugs");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });
});
