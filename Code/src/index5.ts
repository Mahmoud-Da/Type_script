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
    return "Student" + super.fullName;
  }
}
