function generateJSONfromATable(tableArr) {
    const result = [];

    for (let i = 1; i < tableArr.length; i++) {
        const args = tableArr[i].split('|').slice(1, 4);
        let town = args[0].trim();
        let latitudeStr = args[1].trim();
        let longitudeStr = args[2].trim();

        let latitude = Math.round(Number(latitudeStr) * 100) / 100;
        let longitude = Math.round(Number(longitudeStr) * 100) / 100;

        result.push({
            'Town': town,
            'Latitude': latitude,
            'Longitude': longitude
        });
    }

    console.log(JSON.stringify(result));
}

generateJSONfromATable(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
