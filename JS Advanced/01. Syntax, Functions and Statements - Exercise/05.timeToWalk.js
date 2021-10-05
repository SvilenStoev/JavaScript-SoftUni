function timeToWalk(steps, footprint, speed) {
    const metersInTotal = steps * footprint;
    const metersInSecond = speed * 1000 / 60 / 60;
    const secondsWalk = metersInTotal / metersInSecond;
    const totalBreaksInSeconds = Math.floor(metersInTotal / 500) * 60;
    const totalSecondsWalk = secondsWalk + totalBreaksInSeconds;

    const hours = Math.floor(totalSecondsWalk / 3600);
    const minutes = Math.floor(totalSecondsWalk % 3600 / 60);
    const seconds = Math.floor((totalSecondsWalk % 3600) % 60);

    function formatNumber(number) {
        if (number < 10) {
            return '0' + number.toString()
        } else {
            return number
        }
    }

    console.log(formatNumber(hours) + ':' + formatNumber(minutes) + ':' + formatNumber(seconds));
}

timeToWalk(2564, 0.70, 5.5);
