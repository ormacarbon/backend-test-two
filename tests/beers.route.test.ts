import chai, { expect } from "chai";
import sinon from "sinon";
import chaiHttp from "chai-http";
import { app } from "../src/app";
import BeerODM from "../src/database/models/BeerODM";
import StatusHttp from "../src/utils/StatusHttp";
import mock from "./mocks/mock";

chai.use(chaiHttp);

describe("tests of crud routes", function () {
  afterEach(() => sinon.restore());

  describe("testing the creation route", function () {
    it("1 - tests creating a beer with all the correct data, returns a new beer with id", async function () {
      sinon.stub(BeerODM.prototype, "create").resolves(mock.oneBeerWithId);
      const { status, body } = await chai
        .request(app)
        .post("/beers")
        .send(mock.oneBeerWithoutId);
      expect(status).to.be.equal(StatusHttp.CREATED);
      expect(body).to.deep.equal(mock.oneBeerWithId);
    });

    it("2 - tests to create a beer without any fields, returns 'please enter all fields'", async function () {
      const { status, body } = await chai.request(app).post("/beers");
      expect(status).to.be.equal(StatusHttp.BAD_REQUEST);
      expect(body).to.be.equal("please enter all fields");
    });

    it("3 - try to create a beer without the address field, it gives an error, returns 'address' is required", async function () {
      const { status, body } = await chai
        .request(app)
        .post("/beers")
        .send(mock.beerWithoutAddress);
      expect(status).to.be.equal(StatusHttp.BAD_REQUEST);
      expect(body).to.be.equal('"address" is required');
    });
  });

  describe("testing the read route", function () {
    it("1 - test if it returns all beers", async function () {
      sinon.stub(BeerODM.prototype, "read").resolves(mock.someBeers);
      const { status, body } = await chai.request(app).get("/beers");
      expect(status).to.be.equal(StatusHttp.OK);
      expect(body).to.deep.equal(mock.someBeers);
    });
  });

  describe("test the update route", function () {
    it("1 - test if the update is successful", async function () {
      sinon
        .stub(BeerODM.prototype, "update")
        .resolves(mock.oneBeerWithoutIdUpdated);
      const { status, body } = await chai
        .request(app)
        .patch("/beers")
        .send(mock.oneBeerForUpdate);
      expect(status).to.be.equal(StatusHttp.OK);
      expect(body).to.deep.equal(mock.oneBeerWithoutIdUpdated);
    });

    it("2 - test if you do not inform an id, it returns please provide an id", async function () {
      const { status, body } = await chai
        .request(app)
        .patch("/beers")
        .send(mock.oneBeerForUpdateWithoutId);
      expect(status).to.be.equal(StatusHttp.BAD_REQUEST);
      expect(body).to.be.equal("please provide an id");
    });

    it("3 - test if you don't inform something to update, it returns please tell us what you want to update", async function () {
      const { status, body } = await chai
        .request(app)
        .patch("/beers")
        .send(mock.oneBeerForUpdateWithoutUpdate);
      expect(status).to.be.equal(StatusHttp.BAD_REQUEST);
      expect(body).to.be.equal("please tell us what you want to update");
    });
  });

  describe("test the delete route", function () {
    it("1 - test if you successfully delete a beer", async function () {
      sinon.stub(BeerODM.prototype, "delete").resolves();
      const { status, body } = await chai
        .request(app)
        .delete("/beers")
        .send(mock.idForDeleteBeer);
      expect(status).to.be.equal(StatusHttp.OK);
      expect(body).to.be.equal("successfully deleted");
    });

    it("2 - test that you can't delete a beer without an id, it returns please provide an id", async function () {
      const { status, body } = await chai.request(app).delete("/beers").send();
      expect(status).to.be.equal(StatusHttp.BAD_REQUEST);
      expect(body).to.be.equal("please provide an id");
    });

    it("3 - tests that if the id does not exist, it returns id not found", async function () {
      sinon.stub(BeerODM.prototype, "delete").rejects();
      const { status, body } = await chai
        .request(app)
        .delete("/beers")
        .send(mock.idForDeleteBeer);
      expect(status).to.be.equal(StatusHttp.NOT_FOUND);
      expect(body).to.be.equal("id not found");
    });
  });
});
