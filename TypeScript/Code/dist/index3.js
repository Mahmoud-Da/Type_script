"use strict";
let sales1 = 123;
let course2 = "TypeScript";
let is_published2 = true;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let number1 = [1, 2, "3"];
let number3 = [1, 2, 3];
let numbers = [];
numbers.forEach((n) => n.toString);
let user = [1, "moody"];
const small = 1;
const medium = 2;
const large = 3;
var SizeTshirts;
(function (SizeTshirts) {
    SizeTshirts[SizeTshirts["Small"] = 0] = "Small";
    SizeTshirts[SizeTshirts["Medium"] = 1] = "Medium";
    SizeTshirts[SizeTshirts["Large"] = 2] = "Large";
})(SizeTshirts || (SizeTshirts = {}));
let mySize = SizeTshirts.Small;
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
let mySizeSandwish = 1;
function calculateTax(income) {
    return income * 1.2;
}
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
calculateTax3(10000, 2022);
function calculateTax4(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.2;
}
calculateTax4(10000);
function calculateTax5(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.2;
}
calculateTax5(10000);
let employ = { id: 1 };
let employ2 = { id: 1, name: "moody" };
let employ3 = {
    id: 1,
    name: "moody",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=index3.js.map