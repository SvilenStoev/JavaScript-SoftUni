function solve(input) {
    const catalogue = {};

    for (const item of input) {
        const [townName, productName, priceStr] = item.split(' | ');
        const productPrice = Number(priceStr);

        if (!catalogue[productName]) {
            catalogue[productName] = {};
        }

        catalogue[productName][townName] = productPrice;
    }

    for (const prodName in catalogue) {
        const sorted = Object.entries(catalogue[prodName]).sort((a, b) => a[1] - b[1]);
        
        console.log(`${prodName} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

const input = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];

solve(input);