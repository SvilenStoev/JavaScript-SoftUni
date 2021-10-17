const { isOddOrEven } = require('./02. Even or Odd');
const { expect } = require('chai');

describe('isOddOrEven function tests', () => {
    it('should return even for even string length', () => {
        expect(isOddOrEven('evenTest')).to.equal('even');
        expect(isOddOrEven('')).to.equal('even');
    });

    it('should return even for odd string length', () => {
        expect(isOddOrEven('oddTest')).to.equal('odd');
    });

    it('should return even for even string length with spaces', () => {
        expect(isOddOrEven('test with spaces')).to.equal('even');
    });
    
    it('should return undefined if input is not a string', () => {
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven({ test: 'test' })).to.equal(undefined);
        expect(isOddOrEven(['test', 'test'])).to.equal(undefined);
    });
});