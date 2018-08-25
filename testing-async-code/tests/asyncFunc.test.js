const chai = require("chai");
const expect = chai.expect;
function someMadeUpAsyncFunc(boolValue, cb) {
  setTimeout(function() {
    cb(boolValue ? "You get a sweet :)" : "You get nothing!!")
  }, 1000);
}

describe.only("AsyncTest", function() {
  it("should return `You get a sweet :)` if `true` is passed in", function(done) {
    someMadeUpAsyncFunc(true, function(sweetCheck) {
      expect(sweetCheck).to.equal("You get a sweet :)");
      done();
    });
  });
  it("should return `You get nothing!!` if `false` is passed in", function(done) {
  	someMadeUpAsyncFunc(false, function(sweetCheck) {
      expect(sweetCheck).to.equal("You get a sweet :)");
      done();
  	});
  });
});
