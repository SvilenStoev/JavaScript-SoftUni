const { lookupChar } = require('./03. Char Lookup');
const { expect } = require('chai');

describe('lookupChar function tests', () => {
    it('should return correct char if parameters are correct', () => {
        expect(lookupChar('test', 0)).to.equal('t');
        expect(lookupChar('test2', 2)).to.equal('s');
        expect(lookupChar('test3', 4)).to.equal('3');
        expect(lookupChar(' ', 0)).to.equal(' ');
    });
    
    it('should return "Incorrect index" if value of the index is incorrect', () => {
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
        expect(lookupChar('', 0)).to.equal('Incorrect index');
        expect(lookupChar('correctInput', -5)).to.equal('Incorrect index');
    });

    it('should return undefined if first parameter is not a string', () => {
        expect(lookupChar(5)).to.equal(undefined);
        expect(lookupChar({})).to.equal(undefined);
        expect(lookupChar([])).to.equal(undefined);
        expect(lookupChar(NaN)).to.equal(undefined);
        expect(lookupChar(undefined)).to.equal(undefined);
    });

    it('should return undefined if second parameter is a string number', () => {
        expect(lookupChar('test', '5')).to.equal(undefined);
        expect(lookupChar('test', '-5')).to.equal(undefined);
        expect(lookupChar('test', '0')).to.equal(undefined);
    });

    it('should return undefined if second parameter is not a number', () => {
        expect(lookupChar('correctInput', 'incorectInput')).to.equal(undefined);
        expect(lookupChar('correctInput', {})).to.equal(undefined);
        expect(lookupChar('correctInput', [])).to.equal(undefined);
        expect(lookupChar('correctInput', NaN)).to.equal(undefined);
        expect(lookupChar('correctInput', undefined)).to.equal(undefined);
    });

    it('should return undefined if second parameter is not an integer', () => {
        expect(lookupChar('correctInput', 1.2)).to.equal(undefined);
        expect(lookupChar('correctInput', -1.2)).to.equal(undefined);
    });
});