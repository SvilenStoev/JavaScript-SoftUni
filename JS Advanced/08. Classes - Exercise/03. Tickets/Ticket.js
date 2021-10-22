function ticketsData(ticketsArgs, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = [];

    for (let ticket of ticketsArgs) {
        const [destination, price, status] = ticket.split('|');

        const currTicket = new Ticket(destination, Number(price), status);

        result.push(currTicket);
    }

    if (sortCriteria == 'price') {
        result.sort((a, b) => a.price - b.price);
    } else {
        result.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }

    return result;
}

const ticketsArgs = ['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'];
const sortCriteria = 'destination';

ticketsData(ticketsArgs, sortCriteria);