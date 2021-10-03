function circleArea(input) {
    
    let area;
    let inputType = typeof(input);

    if(inputType === 'number') {
        area = input ** 2 * Math.PI;

        console.log(area.toFixed(2));
    }
    else   
    {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);