const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const app = require("../app");

chai.should();

describe("REST API ", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("GET /api/recipes", () => {
    it("should return status 200", async () => {
      const response = await request.get("/api/recipes");
      response.should.have.status(200);
    });
  });
});
