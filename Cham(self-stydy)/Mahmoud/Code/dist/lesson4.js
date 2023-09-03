"use strict";
var _a;
let cham2 = { id: 1, name: "cham", retire() { } };
let lili = { id: 2, name: "lili", retire() { } };
let cham1 = {
    id: 3,
    name: "cham",
    retire() { },
    jobName: "izakaya",
};
let weight = 1;
weight = "1kg";
weight = 1;
let moody = "work";
let name2 = null;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
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
processEvent();
