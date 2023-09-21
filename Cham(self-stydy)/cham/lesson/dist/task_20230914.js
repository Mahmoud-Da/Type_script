"use strict";
let age = 18;
let name1 = "Cham";
function add(a, b) {
    return a + b;
}
let money = add(10, 20);
console.log(money);
let fruits = ["Orange", "Grape", "Banana"];
fruits.push("Apple");
console.log(fruits);
const person = {
    name: "Cham",
    age: 32,
};
function isEven(number) {
    return number % 2 == 0;
}
for (let i = 1; i < 6; i++) {
    console.log(i);
}
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.width * this.height;
    }
}
