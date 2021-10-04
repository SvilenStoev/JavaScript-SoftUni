function createCar(carOrder) {
    const carBuild = {
        model: carOrder.model,
        carriage: {
            type: carOrder.carriage,
            color: carOrder.color
        }
    };

    let wheelDiameter = carOrder.wheelsize % 2 == 0 ? carOrder.wheelsize - 1 : carOrder.wheelsize;

    carBuild.wheels = Array(4).fill(wheelDiameter, 0, 4);

    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    const orderEnginePower = carOrder.power;

    if (orderEnginePower <= smallEngine.power) {
        carBuild.engine = smallEngine;
    }
    else if (orderEnginePower <= normalEngine.power) {
        carBuild.engine = normalEngine;
    }
    else {
        carBuild.engine = monsterEngine;
    }

    return carBuild;
}

const order = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}

const car = createCar(order);

console.log(car);