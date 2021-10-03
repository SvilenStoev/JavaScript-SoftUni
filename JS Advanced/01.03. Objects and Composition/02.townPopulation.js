function townsPopulation(input) {
    const townsPopulation = {};

    for (let args of input) {
        let [town, population] = args.split(' <-> ');

        let populationNumber = Number(population);

        if (townsPopulation[town] === undefined) {
            townsPopulation[town] = populationNumber;
        }
        else {
            townsPopulation[town] += populationNumber;
        }
    }

    for (let key in townsPopulation) {
        console.log(`${key} : ${townsPopulation[key]}`);
    }
}

townsPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);