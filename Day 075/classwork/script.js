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














class Animal{
    constructor(name, ){
        this.name = name
    }

}

class childmamal {
    constructor(name, age) {
        this.name = name
        super(name, age)
        this.age = age
    }
}

class dog{
    constructor(name, age, bark) {
        this.name = name
        super(name, age)
        this.bark = bark
    }
}

const dog = new Dog("Miki", "brown", "Labrador");
