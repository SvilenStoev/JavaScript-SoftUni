const { mathEnforcer } = require('./04. Math Enforcer');
const { expect } = require('chai');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        let instance = null;
        
        beforeEach(() => {
            instance = mathEnforcer;
        });

        it('should add 5 when parameter is valid', () => {
            expect(instance.addFive(10)).to.equal(15);
            expect(instance.addFive(-15)).to.equal(-10);
            expect(instance.addFive(0)).to.equal(5);
            expect(instance.addFive(5.5)).closeTo(10.5, 0.01);
            expect(instance.addFive(-5.05)).closeTo(-0.05, 0.01);
        });

        it('should return undefined when parameter is not valid', () => {
            expect(instance.addFive('')).to.equal(undefined);
            expect(instance.addFive('10')).to.equal(undefined);
            expect(instance.addFive([5, 10])).to.equal(undefined);
        });
    });

    describe('subtractTen', () => {
        let instance = null;
        
        beforeEach(() => {
            instance = mathEnforcer;
        });

        it('should subtract 10 when parameter is valid', () => {
            expect(instance.subtractTen(15)).to.equal(5);
            expect(instance.subtractTen(-15)).to.equal(-25);
            expect(instance.subtractTen(0)).to.equal(-10);
            expect(instance.subtractTen(15.05)).closeTo(5.05, 0.01);
            expect(instance.subtractTen(-15.05)).closeTo(-25.05, 0.01);
        });

        it('should return undefined when parameter is not valid', () => {
            expect(instance.subtractTen('')).to.equal(undefined);
            expect(instance.subtractTen('10')).to.equal(undefined);
            expect(instance.subtractTen([5, 10])).to.equal(undefined);
            expect(instance.subtractTen({})).to.equal(undefined);
        });
    });

    describe('sum', () => {
        let instance = null;
        
        beforeEach(() => {
            instance = mathEnforcer;
        });

        it('should sum two numbers when parameters are valid', () => {
            expect(instance.sum(5, 5)).to.equal(10);
            expect(instance.sum(-10, -5)).to.equal(-15);
            expect(instance.sum(0, 0)).to.equal(0);
            expect(instance.sum(5.05, 1.02)).closeTo(6.07, 0.01);
            expect(instance.sum(-5.05, -1.02)).closeTo(-6.07, 0.01);
        });

        it('should return undefined when parameters is not valid', () => {
            expect(instance.sum('', '')).to.equal(undefined);
            expect(instance.sum([], [])).to.equal(undefined);
            expect(instance.sum({}, {})).to.equal(undefined);
            expect(instance.sum('10', 5)).to.equal(undefined);
            expect(instance.sum([5, 10], 5)).to.equal(undefined);
            expect(instance.sum(NaN, undefined)).to.equal(undefined);
        });
    });
});