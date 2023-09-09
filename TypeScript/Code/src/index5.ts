// Creating Classes
class Account {
  constructor(
    // readonly (we can't modify)
    public readonly id: number,
    public owner: string,
    // private (not accessable outside the class)
    private _balance: number,
    //   optional property
    public nickname?: string
  ) {}

  private calculateTax(): void {}
  deposte(amount: number): void {
    if (amount <= 0) {
      throw new Error("invalid amount");
    }
    this._balance += amount;
    this.calculateTax();
  }
  // if we wan to aceess a private method
  get balance() {
    return this._balance;
  }

  // to be able to modify a private method
  set balance(value: number) {
    if (value > 0) {
      throw new Error("invalid Value");
    }
    this._balance = value;
  }
}

// Creating an Object
let account = new Account(1, "moody", 0);
account.deposte(100);

// we can't access it because it's private
// console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);

// Read-only_and_Optional_Properties

// the id can be access and changed later in this id: number;
// to prevent that we can pass readonly keyword => we can only set it in the constructer

// we can create an optional property using ? => nickname?: string

// Acess Control Keyword
// all the property are puplic by default

// parameters properties
// by using puplic keyword we can inisilaize the parameter automatically

class A {
  // readonly id: number;

  constructor(public readonly id: number) {
    // this.id = id;
  }
}

// Getter And Setter
// Get to acess a private (property/method)
// Set to be able to modify a private (property/method)

// index signcuture
class SeatAssignment {
  // A1, A2, ...
  // Ahmad, Muhammed, ...

  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Ahmad";
// or
seats["A1"] = "Ahmad";
seats.A2 = "Muhammed";

// Static Members
class Ride {
  private static _activeRides: number = 0;

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

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.stop();

console.log(Ride.activeRides);

// Inheritence

// override
// when we override a method we  use override key word (or it weill not conect to the method that we want to override it)

class Person {
  constructor(
    public readonly id: number,
    public firstName: string,
    public lastName: string
  ) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  override get fullName() {
    return "Student " + super.fullName;
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}
// getter and setter using
// In this code, the fullName property is implemented as
//  a getter using the get keyword. When you access person.fullName,
//   the getter is invoked, and it calculates
//   and returns the full name by combining the firstName and lastName properties.

// This allows you to access fullName like a regular property,
//  but it provides the benefit of dynamic calculation based on the firstName
//  and lastName properties of the Person class.
// polumorphism (poly => many,  morphism => form)
// open closed principel (Classes should be open for extension and cloesd for modification)
class Principle extends Person {
  override get fullName() {
    return "Principle " + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}
printNames([
  new Student(1, "Mosh", "Hmadani"),
  new Teacher(1, "Lili", "Hanem"),
  new Principle(1, "Aboabdo", "Da"),
]);

// Private vs Protected Members
// Protected members are inherited and can we be used in the child class
// Private members are not inherited so we can't use it the child class
// don't use Protected members unless u really know what you are doing
class Car {
  get Color() {
    return console.log("red");
  }

  // private start() {
  //   return console.log("start");
  // }

  protected stop() {
    return console.log("start");
  }
}
class Bmw extends Car {
  override get Color() {
    return console.log("green");
  }

  // we can't acess start method (private)

  // we can acess stop method (protected)
  break() {
    this.stop();
  }
}

// Abstract Classes and Methods
// Abstract Classes/Methods (uncooked Classes/Methods [not ready])
// Abstract Classes/Methods to not able to create instece form it
// Abstract methods only can be exist inside an Abstact Classes
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}
// we can't create an instance
// let circle = new Shape("red");

// we can't call a method
// render();

// Interfaces
// to define the shape of objects

abstract class Calender {
  constructor(public name: string) {}

  abstract addEvent(): void;
  abstract removeEvent(): void;
}

interface Calender {
  name: string;
  addEvent1(): void;
}

//  we can extend the same as classes
interface CloudCalender extends Calender {
  sync(): void;
}

// hover in class name (GoogleCloud) and press cmd + . to auto implement
class GoogleCloud implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
  addEvent1(): void {
    throw new Error("Method not implemented.");
  }
}
