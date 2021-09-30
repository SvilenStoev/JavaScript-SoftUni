function solve(positions) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    const firstPlayer = 'X';
    const secondPlayer = 'O';
    let length = dashboard.length;
    let isGameEnded = false;
    let movement = 1;

    for (let currPosition of positions) {
        let [currRow, currCol] = currPosition.split(' ');
        // let currRow = Number(args[0]);
        // let currCol = Number(args[1]);

        for (let row of dashboard) {
            let isBreak = false;

            for (let item of row) {
                if (item === false) {
                    isBreak = true;
                    break;
                }
            }

            if (isBreak) {
                isGameEnded = false;
                break;
            }

            isGameEnded = true;
        }

        if (isGameEnded) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
        
        if (dashboard[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        let isFirstPlayerMove = movement % 2 != 0;

        if (isFirstPlayerMove) {
            dashboard[currRow][currCol] = firstPlayer;
        }
        else {
            dashboard[currRow][currCol] = secondPlayer;
        }

        //check by rows
        for (let row = 0; row < length; row++) {
            let firstEl = dashboard[row][0];

            if (firstEl === false) {
                continue;
            }

            isGameEnded = dashboard[row].every(el => el === firstEl);

            if (isGameEnded) {
                break;
            }
        }

        //check by cols
        if (isGameEnded === false) {
            for (let col = 0; col < length; col++) {
                let firstEl = dashboard[0][col];

                if (firstEl === false) {
                    continue;
                }

                const currCol = dashboard.map(function (value, index) { return value[col]; });

                isGameEnded = currCol.every(el => el === firstEl);

                if (isGameEnded) {
                    break;
                }
            }
        }

        //check by main diagonal
        const middleEl = dashboard[1][1];

        if ((middleEl !== false && (dashboard[0][0] === middleEl && dashboard[2][2] === middleEl)) ||
            (middleEl !== false && (dashboard[2][0] === middleEl && dashboard[0][2] === middleEl))) {
            isGameEnded = true;
        }

        if (isGameEnded) {
            if (isFirstPlayerMove) {
                console.log(`Player ${firstPlayer} wins!`);
            }
            else {
                console.log(`Player ${secondPlayer} wins!`);
            }
            break;
        }

        movement++;
    }

    printResult(dashboard);
}

function printResult(dashboard) {
    for (let row of dashboard) {
        console.log(row.join('\t'));
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);