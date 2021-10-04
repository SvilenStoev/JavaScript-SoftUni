function heroes(heroesArray) {
    const heroesData = [];

    for (const heroStr of heroesArray) {
        let [name, heroLevel, items] = heroStr.split(' / ')
        level = Number(heroLevel);
        items = items ? items.split(', ') : [];

        heroesData.push({ name, level, items });
    }

    console.log(JSON.stringify(heroesData));
}

const heroesData = heroes(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);