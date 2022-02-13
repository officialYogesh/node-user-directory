process.env.NODE_ENV = "test";

const supertest = require("supertest");

const createServer = require("../utils/server.utils");

const app = createServer();

describe("auth", () => {
  describe("Do login", () => {
    describe("given get request to login", () => {
      it("Should have success status code", async () => {
        const { statusCode } = await supertest(app).post(`/auth/login`);
        expect(statusCode).toBe(200);
      });
    });
  });
});
