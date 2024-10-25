class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get Perimeter() {
        return 2 * (this.width + this.height);
    }

}

let smth = new Rectangle(200, 100)
console.log (smth.Perimeter)