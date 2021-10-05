function calorieObject(foodsArr) {
    const result = {};

    for (let i = 0; i < foodsArr.length; i += 2) {
        let currFoodName = foodsArr[i];
        let currFoodCalories = Number(foodsArr[i + 1]);

        result[currFoodName] = currFoodCalories;
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);