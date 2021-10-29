const { library } = require('./library');
const { expect } = require('chai');

describe('library tests', () => {
    describe('calcPriceOfBook', () => {
        it('should works with valid input', () => {
            expect(library.calcPriceOfBook('test', 2000)).to.equal('Price of test is 20.00');
            expect(library.calcPriceOfBook('test', 1980)).to.equal('Price of test is 10.00');
            expect(library.calcPriceOfBook('test', 1960)).to.equal('Price of test is 10.00');
        });

        it('should throw error if input is invalid', () => {
            expect(() => library.calcPriceOfBook(5, 2000)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(5.50, 2000)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('valid', '2000')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('valid', 2000.50)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('valid', 1900.50)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, {})).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], [])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([])).to.throw('Invalid input');
        });
    });

    describe('findBook', () => {
        it('should find the book with valid input', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy"], 'Troy')).to.equal('We found the book you want.');
        });

        it('should throw error if array is empty', () => {
            expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
        });

        it('should throw error if array is empty', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'InvalidBook')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('should arrange the books with valid input', () => {
            expect(library.arrangeTheBooks(5)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
        });

        it('should not arrange the books if no enought space', () => {
            expect(library.arrangeTheBooks(100)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(1000)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

        it('should throw error if input is invalid', () => {
            expect(() => library.arrangeTheBooks(5.5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-10)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks()).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('test')).to.throw('Invalid input');
        });
    });
});