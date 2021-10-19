class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
    }
}

let point1 = new Point(1, 1);
let point2 = new Point(4, 5);

let distance = Point.distance(point1, point2);
console.log(point1, point2);
console.log(distance);
