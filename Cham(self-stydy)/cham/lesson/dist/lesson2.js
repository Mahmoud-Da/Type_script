"use strict";
function run() {
    var a = "lili";
    let b = "hana";
    console.log(a, b);
    {
        var a = "haha";
        let c = "mama";
        console.log(a, c);
    }
    console.log(a);
}
run();
function run1() {
    var a = "lili";
    let b = "hana";
    console.log(a, b);
    {
        var a = "haha";
        let b = "mama";
        console.log(a, b);
    }
    console.log(a);
    console.log(b);
}
run1();
function ⅹ() {
    var a = "Hana";
    console.log(a);
}
ⅹ();
function x() {
    let b = "Mama";
    console.log(b);
}
x();
var a1 = "lili";
let b1 = "hana";
console.log(window.a1);
var a2 = "lili";
var a2 = "mama";
let b2 = "Haha";
let b3 = "HAHA";
