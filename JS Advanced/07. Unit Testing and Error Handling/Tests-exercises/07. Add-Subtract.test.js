const { expect } = require('chai');
const { createCalculator } = require('./07. Add-Subtract');

describe('createCalculator tests', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('add single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('substract single number', () => {
        instance.add(10);
        instance.subtract(3);
        expect(instance.get()).to.equal(7);
    });

    it('add a number as string', () => {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    });

    it('substract a number as string', () => {
        instance.add('10');
        instance.subtract('3');
        expect(instance.get()).to.equal(7);
    });

    it('shoud has all properties', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });
});