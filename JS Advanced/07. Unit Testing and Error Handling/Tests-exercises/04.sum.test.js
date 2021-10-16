const { expect } = require('chai');
const sum = require('./04. Sum of Numbers');

describe('Tests for Sum() funciton', () => {
    it('Should return correct sum', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('Should return 0 if arr is empty', () => {
        expect(sum([])).to.equal(0);
    });

    it('Should return correct sum with two numbers', () => {
        expect(sum([0, 100])).to.equal(100);
    });
});