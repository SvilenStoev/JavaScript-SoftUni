function cooking(numberAsString, par1, par2, par3, par4, par5) {
    let number = Number(numberAsString);
    let array = [par1, par2, par3, par4, par5];

    for(let i = 0; i < array.length; i++) {
        switch(array[i]) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= number * 0.2; break;
        }

        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
