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
        return "Student" + super.fullName;
    }
}
//# sourceMappingURL=index5.js.map