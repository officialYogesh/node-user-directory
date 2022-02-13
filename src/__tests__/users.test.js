process.env.NODE_ENV = "test";

const supertest = require("supertest");

const createApp = require("../app");
const connect = require("../utils/connect.utils");
const { signJwt } = require("../utils/jwt.utils");
const user = require("../Models/user");

let token = "";

const startTestDB = async () => {
  await connect();
};
startTestDB();

const app = createApp();

const createToken = async () => {
  token = await signJwt();
};

createToken();

beforeEach(async () => {
  await user.deleteMany({});
});

describe("users", () => {
  describe("get all users", () => {
    describe("given no user id", () => {
      it("Should return all users", async () => {
        const { statusCode } = await supertest(app)
          .get("/users")
          .set({ "x-auth-token": token });
        expect(statusCode).toBe(200);
      });
    });
    describe("given no access token", () => {
      it("Should return 401 error code", async () => {
        const { statusCode } = await supertest(app).get("/users");
        expect(statusCode).toBe(401);
      });
    });
  });

  describe("get specific user", () => {
    describe("given the user does not exists", () => {
      it("Should return a 404", async () => {
        const { statusCode } = await supertest(app)
          .get("/users/-1")
          .set({ "x-auth-token": token });
        expect(statusCode).toBe(404);
      });
    });
    describe("given no access token", () => {
      it("Should return 401 error code", async () => {
        const { statusCode } = await supertest(app).get("/users/1");
        expect(statusCode).toBe(401);
      });
    });
  });

  describe("add new user", () => {
    describe("given post request with user details", () => {
      it("Should return 201 status", async () => {
        const { statusCode } = await supertest(app)
          .post("/users")
          .send({
            name: "Yogesh Patil",
            address: "Mumbai",
            dob: "28-09-1998",
            state: "Maharashtra",
          })
          .set({ "x-auth-token": token });
        expect(statusCode).toBe(201);
      });
    });
    describe("given post request with user details", () => {
      it("Should return new user details status", async () => {
        const {
          _body: { user },
        } = await supertest(app)
          .post("/users")
          .send({
            name: "Yogesh Patil",
            address: "Mumbai",
            dob: "28-09-1998",
            state: "Maharashtra",
          })
          .set({ "x-auth-token": token });
        expect(user.name).toEqual("Yogesh Patil");
        expect(user.address).toEqual("Mumbai");
        expect(user.dob).toEqual("28-09-1998");
        expect(user.state).toEqual("Maharashtra");
      });
    });
    describe("given no access token", () => {
      it("Should return 401 error code", async () => {
        const { statusCode } = await supertest(app).get("/users");
        expect(statusCode).toBe(401);
      });
    });
  });

  describe("update specific user", () => {
    describe("given the user does not exists", () => {
      it("Should return a 404", async () => {
        const { statusCode } = await supertest(app)
          .put("/users/-1")
          .set({ "x-auth-token": token });
        expect(statusCode).toBe(404);
      });
    });
    describe("given no access token", () => {
      it("Should return 401 error code", async () => {
        const { statusCode } = await supertest(app).get("/users/1");
        expect(statusCode).toBe(401);
      });
    });
  });

  describe("delete specific user", () => {
    describe("given the user does not exists", () => {
      it("Should return a 404", async () => {
        const { statusCode } = await supertest(app)
          .delete("/users/-1")
          .set({ "x-auth-token": token });
        expect(statusCode).toBe(404);
      });
    });
    describe("given no access token", () => {
      it("Should return 401 error code", async () => {
        const { statusCode } = await supertest(app).get("/users/1");
        expect(statusCode).toBe(401);
      });
    });
  });
});
