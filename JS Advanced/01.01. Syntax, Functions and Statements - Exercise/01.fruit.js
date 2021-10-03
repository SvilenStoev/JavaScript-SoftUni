function storeCalculator(fruitType, weight, price){
    const fruitKilograms = weight / 1000;
    const totalMoney = fruitKilograms * price;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${fruitKilograms.toFixed(2)} kilograms ${fruitType}.`);
}

storeCalculator('orange', 2500, 1.80);