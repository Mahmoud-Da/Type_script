"use strict";
var _a;
let employe = {
    id: 1,
    name: "moody",
    retire: (date) => {
        console.log(date);
    },
};
let employee = {
    id: 1,
    name: "moody",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10");
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let array0 = ["0", "1", "2"];
if (array0 !== null && array0 !== undefined)
    console.log(array0[4].toUpperCase());
console.log((_a = array0[0]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = null;
let ride = {
    speed1: speed || 30,
    speed2: speed !== null ? speed : 30,
    speed3: speed !== null && speed !== void 0 ? speed : 30,
};
let phone = document.getElementById("phone");
let phone1 = document.getElementById("phone");
phone1.value;
let phone2 = document.getElementById("phone");
function render(document) {
    document.move();
    document.fly();
}
function render1(document) {
    if (typeof document === "string") {
        document.toLocaleUpperCase();
    }
}
function processEvent() {
    while (true) {
        console.log("hi");
    }
}
function reject(message) {
    throw new Error(message);
}
//# sourceMappingURL=index4.js.map