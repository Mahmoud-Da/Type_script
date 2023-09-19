"use strict";
let number = 2345;
const hana = 347;
let number1 = 679;
const kaka = 58963;
let mike = "I'm Mike";
const a = "Lyly";
let firstName = `John`;
let title = `Web Developer`;
let profile = `I'm ${firstName}.
I'm a ${title}`;
console.log(profile);
let pending;
pending = true;
pending = false;
let result = true;
result = "ok";
result = 9;
let sp1 = [2, "Corddoba Guitar Guclcor", true];
function getData(callback) {
    callback();
}
getData("abc");
function getData1(callback1) {
}
getData1("abc");
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    let isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jun));
let skill;
skill = ["Programming", 5];
let skill1;
let myDog = {
    name: "Fido",
    age: 3,
    birthday: new Date("1990-01-01"),
    bark: () => console.log("Woof! Woof!"),
};
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getFullName: () => {
        return `${car.year} ${car.make} ${car.model}`;
    },
};
console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.getFullName());
