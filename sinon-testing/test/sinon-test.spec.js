const sinon = require("sinon");
const assert = require("assert");

describe('stub of origin sinon', () => {
    it('test stub.callThrough', function () {
        var stub = sinon.stub();

        var obj = {};

        obj.sum = function sum(a, b) {
            console.log(a+b);
            return a + b;
        };

        sinon.stub(obj, 'sum');
        obj.sum.withArgs(2, 2).callsFake(function foo() {
            console.log('bar');
            return 'bar';
        });

        obj.sum.callThrough();

        obj.sum(2, 2); // 'bar'
        obj.sum(1, 2); // 3
    });

    it('test stub.withArgs', () => {
        var callback0 = sinon.stub();
        callback0.withArgs(42).returns(1);
        callback0.withArgs(1).throws("name");

        callback0();
        callback0(42);
        callback0(1);
    });

    it('test stub.callsFake', () => {
        var myObj = {}
        myObj.prop = function propFn() {
            console.log('foo');
            return 'foo';
        };

        sinon.stub(myObj, 'prop').callsFake(function fakeFn() {
            console.log('bar');
            return 'bar';
        });

        myObj.prop();
    });
});
