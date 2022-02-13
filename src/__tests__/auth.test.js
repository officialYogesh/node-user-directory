process.env.NODE_ENV = "test";

const supertest = require("supertest");
const createApp = require("../app");

const app = createApp();

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
