function storeCatalogue(productsArr) {
    const productCatalogue = {};

    for (let product of productsArr) {
        const firstLetter = product[0];
        const [productName, productPrice] = product.split(' : ');

        if (!productCatalogue[firstLetter]) {
            productCatalogue[firstLetter] = [];
        }

        productCatalogue[firstLetter].push({ productName, productPrice: Number(productPrice) });
    }

    // Sort an object!!!
    const sortedResult = Object.keys(productCatalogue).sort().reduce(
        (obj, key) => {
            obj[key] = productCatalogue[key];
            return obj;
        },
        {}
    );

    for (const letter in sortedResult) {
        console.log(letter);

        sortedResult[letter]
            .sort((a, b) => a.productName.localeCompare(b.productName))
            .forEach(prod => {
                console.log(`  ${prod.productName}: ${prod.productPrice}`)
            });
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);