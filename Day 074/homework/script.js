
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
    constructor(name, age, breed) {
        super(name, age); 
        this.breed = breed;
    }

    speak() {
        return `${this.name}, the ${this.breed}, barks.`;
    }

    static info() {
        return "Dogs are loyal animals.";
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
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity; // kWh
    }

    drive() {
        return `${this.brand} ${this.model} with ${this.batteryCapacity}kWh battery is driving silently.`;
    }

    static info() {
        return "Electric cars are eco-friendly.";
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
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    study() {
        return `${this.name}, majoring in ${this.major}, is studying.`;
    }

    greet() {
        return `${super.greet()} I study ${this.major}.`;
    }

    static info() {
        return "Students are learners.";
    }
}



ა
const dog = new Dog('Buddy', 5, 'Golden Retriever');
console.log(dog.details); 
console.log(dog.speak()); 
console.log(Dog.info()); 


const electricCar = new ElectricCar('Tesla', 'Model 3', 75);
console.log(electricCar.details); 
console.log(electricCar.drive()); 
console.log(ElectricCar.info());

const student = new Student('Alice', 20, 'Computer Science');
console.log(student.details); 
console.log(student.greet()); 
console.log(student.study()); 
console.log(Student.info()); 

