"use strict";
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    calculateTax() { }
    deposte(amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        this._balance += amount;
        this.calculateTax();
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value > 0) {
            throw new Error("invalid Value");
        }
        this._balance = value;
    }
}
let account = new Account(1, "moody", 0);
account.deposte(100);
console.log(typeof account);
console.log(account instanceof Account);
class A {
    constructor(id) {
        this.id = id;
    }
}
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Ahmad";
seats["A1"] = "Ahmad";
seats.A2 = "Muhammed";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.stop();
console.log(Ride.activeRides);
class Person {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Person {
    get fullName() {
        return "Student " + super.fullName;
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return "Principle " + super.fullName;
    }
}
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student(1, "Mosh", "Hmadani"),
    new Teacher(1, "Lili", "Hanem"),
    new Principle(1, "Aboabdo", "Da"),
]);
class Car {
    get Color() {
        return console.log("red");
    }
    stop() {
        return console.log("start");
    }
}
class Bmw extends Car {
    get Color() {
        return console.log("green");
    }
    break() {
        this.stop();
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Calender {
    constructor(name) {
        this.name = name;
    }
}
class GoogleCloud {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
    addEvent1() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=index5.js.map