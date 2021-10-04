function solve(input) {
    const result = [];

    for (const item of input) {
        const [townName, productName, priceStr] = item.split(' | ');
        const productPrice = Number(priceStr);

        const currProduct = result.find(x => x.productName == productName);

        if (currProduct) {
            if (currProduct.productPrice > productPrice) {
                currProduct.productName = productName;
                currProduct.productPrice = productPrice;
                currProduct.townName = townName;
            }
        }
        else {
            result.push({productName, productPrice, townName});
        }
    }

    result.forEach(x => {
        console.log(`${x.productName} -> ${x.productPrice} (${x.townName})`);
    });  
}

const input = ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'];


solve(input);