function storeCatalogue(productsArr) {
    const result = {};

    for (let product of productsArr) {
        const firstLetter = product[0];
        const [productName, productPrice] = product.split(' : ');

        if (result[firstLetter]) {
            result[firstLetter].push({productName, productPrice: Number(productPrice)});
        }
        else {
            result[firstLetter] = [];
            result[firstLetter].push({productName, productPrice: Number(productPrice)});
        }
    }

    const sortedResult = Object.keys(result).sort().reduce(
        (obj, key) => { 
          obj[key] = result[key]; 
          return obj;
        }, 
        {}
      );

    for (const letter in sortedResult) {
        console.log(letter);

        sortedResult[letter].sort((a, b) => a.productName.localeCompare(b.productName)).forEach(prod => {
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