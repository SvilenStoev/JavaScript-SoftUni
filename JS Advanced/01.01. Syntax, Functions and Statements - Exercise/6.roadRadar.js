function roadRadar(speed, area) {
    let speedLimit = 0;
    let difference = 0;
    
    switch (area) {
        case 'motorway': 
        speedLimit = 130;
        difference = speed - speedLimit; break;

        case 'interstate': 
        speedLimit = 90;
        difference =  speed - speedLimit; break;

        case 'city': 
        speedLimit = 50;
        difference =  speed - speedLimit; break;

        case 'residential': 
        speedLimit = 20;
        difference = speed - speedLimit; break;
    }

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else {
        let status = '';

        if (difference <= 20) {
            status = 'speeding';
        }
        else if (difference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');