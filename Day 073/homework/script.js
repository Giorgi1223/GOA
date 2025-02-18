
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get details() {
        return `${this.name} is ${this.age} years old.`;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }

    static info() {
        return "Animals are living beings.";
    }
}


class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}


class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
    }
}


class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    get details() {
        return `${this.brand} ${this.model}`;
    }

    drive() {
        return `${this.brand} ${this.model} is driving.`;
    }

    static info() {
        return "Cars are vehicles.";
    }
}


class ElectricCar extends Car {
    drive() {
        return `${this.brand} ${this.model} is driving silently.`;
    }
}


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get details() {
        return `${this.name} is ${this.age} years old.`;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }

    static info() {
        return "Humans are intelligent beings.";
    }
}

class Student extends Human {
    study() {
        return `${this.name} is studying.`;
    }
}


class Employee extends Human {
    work() {
        return `${this.name} is working.`;
    }
}


const dog = new Dog('Buddy', 5);
console.log(dog.details);
console.log(dog.speak());

const cat = new Cat('Whiskers', 3);
console.log(cat.details); 
console.log(cat.speak()); 

const electricCar = new ElectricCar('Tesla', 'Model 3');
console.log(electricCar.details); 
console.log(electricCar.drive()); 

const student = new Student('Alice', 20);
console.log(student.details);
console.log(student.greet());
console.log(student.study()); 

const employee = new Employee('Bob', 30);
console.log(employee.details);
console.log(employee.greet());
console.log(employee.work()); 

// Static method usage
console.log(Animal.info()); 
console.log(Car.info()); 
console.log(Human.info()); 
