class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).some(c => c == condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        let campPrice = this.priceForTheCamp[condition];

        if (campPrice > money) {
            return `The money is not enough to pay the stay at the camp.`;
        } else {
            const currPart = {
                name,
                condition,
                power: 100,
                wins: 0,
                toString: function () {
                    return `${this.name} - ${this.condition} - ${this.power} - ${this.wins}`;
                }
            };

            this.listOfParticipants.push(currPart);

            return `The ${name} was successfully registered.`;
        }
    }

    unregisterParticipant(name) {
        const participantIndex = this.listOfParticipants.findIndex(p => p.name == name);

        if (participantIndex == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            this.listOfParticipants.splice(participantIndex, 1);

            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'Battleship') {
            if (!this.listOfParticipants.some(p => p.name == participant1)) {
                throw new Error(`Invalid entered name/s.`);
            }
        } else {
            if (!this.listOfParticipants.some(p => p.name == participant1) || !this.listOfParticipants.some(p => p.name == participant2)) {
                throw new Error(`Invalid entered name/s.`);
            }
        }

        let partic1 = this.listOfParticipants.find(p => p.name == participant1);
        let partic2 = this.listOfParticipants.find(p => p.name == participant2);

        if (partic1 != undefined && partic2 != undefined) {
            if (partic1.condition != partic2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
        }

        if (typeOfGame == 'Battleship') {
            partic1.power += 20;

            return `The ${partic1.name} successfully completed the game ${typeOfGame}.`;
        }

        if (typeOfGame == 'WaterBalloonFights') {
            if (partic1.power > partic2.power) {
                partic1.wins++;

                return `The ${partic1.name} is winner in the game ${typeOfGame}.`;
            }
            else if (partic1.power < partic2.power) {
                partic2.wins++;

                return `The ${partic2.name} is winner in the game ${typeOfGame}.`;
            }
            else {
                return `There is no winner.`;
            }
        }
    }

    toString() {
        let result = '';

        result += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        const sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        let participants = sortedParticipants.join('\n');

        result += participants;

        return result;
    }
}
