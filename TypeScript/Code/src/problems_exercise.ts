// Exercise 1: Variables and Data Types
// Question: Declare a variable called age and set it to your age. Then, declare a variable called name and set it to your name.

// Answer:
let age1: number = 25;
let name1: string = "John";

// Exercise 2: Basic Functions
// Question: Create a TypeScript function called add that takes two parameters, a and b, and returns their sum.

// Answer:
function add(a: number, b: number): number {
  return a + b;
}

// Exercise 3: Arrays
// Question: Declare an array called fruits that contains the names of three different fruits. Then, add another fruit to the array.
// Answer:

let fruits: string[] = ["apple", "banana", "orange"];
fruits.push("grape");

// Exercise 4: Objects
// Question: Create an object called person with properties name and age. Set the values to your name and age.

// Answer:

let person1: {
  name: string;
  age: number;
} = {
  name: "Alice",
  age: 30,
};

// Exercise 5: Conditional Statements
// Question: Write a TypeScript function called isEven that takes a number as a parameter and returns true if it's even and false if it's odd.

// Answer:
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Exercise 6: Loops
// Question: Create a TypeScript loop that prints the numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 7: Classes
// Question: Define a TypeScript class called Rectangle with properties width and height. Add a method called area that calculates the area of the rectangle.
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}
