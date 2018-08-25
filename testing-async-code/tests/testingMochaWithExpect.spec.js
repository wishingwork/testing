const chai = require("chai");
const expect = chai.expect;

describe("smoke test by expect", function() {
  it("checks equality", function() {
    expect(true).to.be.true;
  });
});
