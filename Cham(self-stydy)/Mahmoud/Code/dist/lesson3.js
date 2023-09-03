"use strict";
const color1 = "Green";
if (color1 === "Green") {
    console.log("進んでください");
}
else if (color1 === "Yellow") {
    console.log("要注意");
}
else if (color1 === "Red") {
    console.log("停止してください");
}
else {
    console.log("ワイワイ");
}
const color2 = "Green";
if (color2 === "Green") {
    console.log("進んでください");
}
else if (color2 === "Yellow") {
    console.log("要注意");
}
else if (color2 === "Red") {
    console.log("停止してください");
}
else {
    console.log("ワイワイ");
}
let sales1 = 123;
let course2 = "TypeScript";
let is_published2 = true;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let a = ["a", "b", "c"];
let h = ["a", "b", "c", 2, 3];
let g = ["a", "b", "c", 2, 3, true];
let b = ["a", "b", "c", 2, 3];
let c;
let user = [1, "moody"];
const small = 1;
const medium = 2;
const large = 3;
var SizeTshirts;
(function (SizeTshirts) {
    SizeTshirts[SizeTshirts["Small"] = 0] = "Small";
    SizeTshirts[SizeTshirts["Medium"] = 1] = "Medium";
    SizeTshirts[SizeTshirts["Large"] = 2] = "Large";
    SizeTshirts[SizeTshirts["Xlarge"] = 3] = "Xlarge";
})(SizeTshirts || (SizeTshirts = {}));
let mySize = SizeTshirts.Small;
let cham_size = SizeTshirts.Small;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var SizeBag;
(function (SizeBag) {
    SizeBag["Small"] = "s";
    SizeBag["Medium"] = "m";
    SizeBag["Large"] = "l";
})(SizeBag || (SizeBag = {}));
function calculateTax(income) {
    return income * 1.2;
}
console.log(calculateTax(3500000));
function calculateTax1() { }
function calculateTax2(income) {
    return income * 1.2;
}
function calculateTax3(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.2;
}
calculateTax3(10323, 23);
function calculateTax4(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.2;
}
calculateTax4(10323);
function calculateTax5(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.2;
}
calculateTax5(10000);
let employ = { id: 1 };
let employ2 = {
    id: 1,
    name: "hana",
    retire: (date) => {
        console.log(date);
    },
};
