class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.totalProfit = 0;
        this.totalTicketsSold = 0;
        this.screenings = [];
    }

    newScreening(date, hall, description) {
        if (this.screenings.some(s => s.date == date && s.hall == hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        } else {
            const currScreening = {
                date,
                hall,
                description,
                toString() {
                    return `${this.hall} - ${this.date} - ${this.description}`;
                }
            };

            this.screenings.push(currScreening);

            return `New screening of ${this.movieName} is added.`;
        }
    }

    endScreening(date, hall, soldTickets) {
        const movieIndex = this.screenings.findIndex(s => s.date == date && s.hall == hall);

        if (movieIndex == -1) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        } else {
            let currentProfit = this.ticketPrice * soldTickets;
            this.totalProfit += currentProfit;
            this.totalTicketsSold += soldTickets;

            this.screenings.splice(movieIndex, 1);

            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
        }
    }

    toString() {
        let movieInfo = '';

        movieInfo += `${this.movieName} full information:\n`;
        movieInfo += `Total profit: ${this.totalProfit.toFixed(0)}$\n`;
        movieInfo += `Sold Tickets: ${this.totalTicketsSold}\n`;

        if (this.screenings.length != 0) {
            movieInfo += 'Remaining film screenings:\n';

            const sortedScr = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));

            movieInfo += sortedScr.join('\n');
        } else {
            movieInfo += 'No more screenings!';
        }

        return movieInfo;
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());