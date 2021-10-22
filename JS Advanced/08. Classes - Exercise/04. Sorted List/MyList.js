class List {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    add(element) {
        this.data.push(element);
        this.size++;
        this.#sort();
    }

    remove(index) {
        this.#checkIndex(index);

        this.data.splice(index, 1);
        this.size--;

        this.#sort();
    }

    get(index) {
        this.#checkIndex(index);

        return this.data[index];
    }

    #sort = () => {
        this.data.sort((a, b) => a - b);
    };

    #checkIndex = (index) => {
        if (index < 0 || index >= this.data.length) {
            throw new Error('The index is out of bounds');
        }
    };
}

let list = new List();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));

list.add(5);
list.add(6);
list.add(7);


console.log(list.size);