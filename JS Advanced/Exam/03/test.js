const { testNumbers } = require('./testNumbers');
const { expect } = require('chai');

describe('testNumbers', () => {
    describe('sumNumber', () => {
        it('should return undefined if input is invalid', () => {
            expect(testNumbers.sumNumbers()).to.be.undefined;
            expect(testNumbers.sumNumbers('test', 'test')).to.be.undefined;
            expect(testNumbers.sumNumbers([], [])).to.be.undefined;
            expect(testNumbers.sumNumbers({}, {})).to.be.undefined;
        });

        it('should works with valid input', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal((3).toFixed(2));
            expect(testNumbers.sumNumbers(1.5, 2.5)).to.equal((4).toFixed(2));
            expect(testNumbers.sumNumbers(-1, -2)).to.equal((-3).toFixed(2));
            expect(testNumbers.sumNumbers(1, -2)).to.equal((-1).toFixed(2));
            expect(testNumbers.sumNumbers(0, 0)).to.equal((0).toFixed(2));
        });

        describe('numberChecker', () => {
            it('should throw error if input is invalid', () => {
                expect(() => testNumbers.numberChecker('test')).to.throw('The input is not a number!');
            });

            it('should works with valid input', () => {
                expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
                expect(testNumbers.numberChecker('0')).to.equal('The number is even!');
                expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
                expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
                expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
            });
        });

        describe('averageSumArray', () => {
            it('should works with valid input', () => {
                expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
                expect(testNumbers.averageSumArray([0])).to.equal(0);
            });
        });
    });
});