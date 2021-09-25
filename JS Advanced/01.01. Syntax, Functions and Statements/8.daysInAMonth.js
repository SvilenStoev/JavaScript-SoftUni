function daysInMonth(month, year) {
    return console.log(new Date(year, month, 0).getDate());
}

daysInMonth(1, 2012);