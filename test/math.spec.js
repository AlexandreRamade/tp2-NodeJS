var expect = require('chai').expect;

var math = require('../Math').math;

/*
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect(function () {}).to.not.throw();
            expect({a: 1}).to.not.have.property('b');
            expect([1, 2]).to.be.an('array').that.does.not.include(3);
        });
    });
});
*/

describe('Math.addition', function() {
    describe('#without arguments', function() {
        it('should return 0 when have no arguments', function() {
            expect(function() {
                math.addition()}).to.not.throw();
            expect(math.addition()).to.equal(0);
        });
    });

    describe('#agrgument is not a number', function() {
        it('should ignore argument that is not a number', function() {
            expect(function() {
                math.addition(2, 4, 'notNumber')}).to.not.throw();
            expect(math.addition(2, 4, 'notNumber')).to.equal(6);
        });
    });

});

describe('Math.soustraction', function() {
    describe('#without arguments', function() {
        it('should return 0 when have no arguments', function() {
            expect(function() {
                math.soustraction()}).to.not.throw();
            expect(math.soustraction()).to.equal(0);
        });
    });

    describe('#agrgument is not a number', function() {
        it('should ignore argument that is not a number', function() {
            expect(function() {
                math.soustraction(2, 4, 'notNumber')}).to.not.throw();
            expect(math.soustraction(2, 4, 'notNumber')).to.equal(-2);
        });
    });

});

describe('Math.multiplication', function() {
    describe('#without arguments', function() {
        it('should return 0 when have no arguments', function() {
            expect(function() {
                math.multiplication()}).to.not.throw();
            expect(math.multiplication()).to.equal(1);
        });
    });

    describe('#agrgument is not a number', function() {
        it('should ignore argument that is not a number', function() {
            expect(function() {
                math.multiplication(2, 4, 'notNumber')}).to.not.throw();
            expect(math.multiplication(2, 4, 'notNumber')).to.equal(8);
        });
    });

});

describe('Math.division', function() {
    describe('#without arguments', function() {
        it('should return 0 when have no arguments', function() {
            expect(function() {
                math.division()}).to.not.throw();
            expect(math.division()).to.equal(0);
        });
    });

    describe('#agrgument is not a number', function() {
        it('should ignore argument that is not a number', function() {
            expect(function() {
                math.division(2, 4, 'notNumber')}).to.not.throw();
            expect(math.division(2, 4, 'notNumber')).to.equal(0.5);
        });
    });

    describe('#divide by 0', function() {
        it('should ignore argument that divide by 0', function() {
            expect(function() {
                math.division(2, 0, 4)}).to.not.throw();
            expect(math.division(2, 0, 4)).to.equal(0.5);
        });
    });

});






