/**
 * 
 * @param {Number} number 
 */

function sameNumbersCheck(number) {
    let sum = 0;
    let isTheSame = true;
    const numberAsString = number.toString();
    const firstNumber = Number(numberAsString[0]);
    const length = numberAsString.length;

    for(let i = 0; i < length; i++) {
        
        sum += Number(numberAsString[i]);

        if(numberAsString[i] != firstNumber) {
            isTheSame = false;
        }
    }

      console.log(isTheSame);
      console.log(sum);
}

sameNumbersCheck(1234);