//  we can write
let sales1: number = 123;
let course2: string = "TypeScript";
let is_published2: boolean = true;

//  and we can write either
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;

// decleare a variable without initialize
let level; // type any

// array
// creating an array of numbers
// in JS
let number1 = [1, 2, "3"];

// in TypeScript
// we can see the error
// let number2: number[] = [1, 2, "3"];

// => so we can fixed eaisly
let number3: number[] = [1, 2, 3];

let numbers: number[] = [];
numbers.forEach((n) => n.toString); // we can see the option of n. it's methods for integers

// tuble
// User ID:number and name:string
let user: [number, string] = [1, "moody"];

// Enums
// JavaScripts
const small = 1;
const medium = 2;
const large = 3;

// TypeScript Enums
enum SizeTshirts {
  Small,
  Medium,
  Large,
}
// Small = 0, Medium = 1, Large = 2
let mySize: SizeTshirts = SizeTshirts.Small;

enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
enum SizeBag {
  Small = "s",
  Medium = "m",
  Large = "l",
}

// using const with Enums will generate more readble JS code
const enum SizeSandwish {
  Small = 1,
  Medium,
  Large,
}
let mySizeSandwish: SizeSandwish = SizeSandwish.Small;

// Functions
function calculateTax(income: number) {
  return income * 1.2;
}

// void if we don't wanna return value
function calculateTax1(): void {}

// select a type
function calculateTax2(income: number): number {
  return income * 1.2;
}
//
function calculateTax3(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.2;
}

calculateTax3(10_000, 2022); // we need to call the same number of parameters

function calculateTax4(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  }
  return income * 1.2;
}

// we can add taxYear to be optional so we can pass one argument
calculateTax4(10_000);

// better way
function calculateTax5(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.2;
}

calculateTax5(10_000); // taxYear is opptionally

// Objects
let employ = { id: 1 };

// readonly to prevent from modify id later
let employ2: {
  readonly id: number;
  name: string;
} = { id: 1, name: "moody" };

// add method to object
let employ3: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "moody",
  retire: (date: Date) => {
    console.log(date);
  },
};
