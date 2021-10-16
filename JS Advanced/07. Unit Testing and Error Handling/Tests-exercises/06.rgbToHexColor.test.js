const { expect } = require('chai');
const { rgbToHexColor } = require('./06. RGB to Hex');

describe('Tests for rgbToHexColor() funciton', () => {
    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts random color to #7B3208', () => {
        expect(rgbToHexColor(123, 50, 8)).to.equal('#7B3208');
    });

    it('should return undefined when parameters are not valid', () => {
        expect(rgbToHexColor(100, 260, 10)).to.equal(undefined);
        expect(rgbToHexColor(-1, 100, 10)).to.equal(undefined);
        expect(rgbToHexColor(100, 50, 1000)).to.equal(undefined);
    });
});