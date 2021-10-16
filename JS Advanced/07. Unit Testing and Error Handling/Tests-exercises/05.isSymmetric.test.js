const { expect } = require('chai');
const { isSymmetric } = require('./05. Check for Symmetry');

describe('Tests for isSymmetric() funciton', () => {
    it('should return true when array is symmetric', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return true when array is symmetric with odd numbers', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('should return false when array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should return false when input is not an array', () => {
        expect(isSymmetric(3)).to.be.false;
    });

    it('should return false when input is a string', () => {
        expect(isSymmetric('assa')).to.be.false;
    });

    it('should return false when input is an array, but with different types', () => {
        expect(isSymmetric([1, 'a'])).to.be.false;
    });

    it('should return false when input is an array, but with different types 2', () => {
        expect(isSymmetric([1, '1'])).to.be.false;
    });
});