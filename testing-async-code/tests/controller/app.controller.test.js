const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const indexPage = require("../../controller/app.controller.js");



describe("AppController - test for controller page", function() {
  describe("getIndexPage - test for controller page", function() {

    it("should return index page - using sinon.spy()", function() {
      let req = {}
      let res = {
        // send: function() {}
        send: sinon.spy()
      }
      indexPage.getIndexPage(req, res);
      // console.log(res.send);
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("hey");
    });

    it("should send hey when user is logged in - using sinon.stub() to trick function", function() {
      let user = {
        isLoggedIn: function() {}
      }
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
      let req = {
        user: user
      }
      let res = {
        send: sinon.spy()
      }
      indexPage.getIndexPage(req, res);
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("hey");
      expect(isLoggedInStub.calledOnce).to.be.true;
    });

    it("should send something else when user is NOT logged in - using sinon.stub() to trick function", function() {
      let user = {
        isLoggedIn: function() {}
      }
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(false);
      let req = {
        user: user
      }
      let res = {
        send: sinon.spy()
      }
      indexPage.getIndexPage(req, res);
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("Ooops. You need to log in to access this page");
      expect(isLoggedInStub.calledOnce).to.be.true;
    });

    it("should send hey when user is logged in - using sinon.mock() to replace raw function as a twicked function", function() {
      let user = {
        isLoggedIn: function() {}
      }
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
      let req = {
        user: user
      }
      let res = {
        send: function() {}
      }
      const mock = sinon.mock(res);
      mock.expects("send").once().withExactArgs("hey");
      indexPage.getIndexPage(req, res);
      expect(isLoggedInStub.calledOnce).to.be.true;
      mock.verify();
    })
  });

  describe("User - using sinon.spy()", function() {
    const user = {
      addUser: (name) => {
        this.name = name;
      }
    }  	
    describe("add User", function() {
      it("should add a user", function() {
        sinon.spy(user, "addUser");
        // console.log(user.addUser);
        user.addUser("John Doe");
        expect(user.addUser.calledOnce).to.be.true;
        expect(user.addUser.firstCall.args[0]).to.equal("John Doe");
      });
    });
  });
});

