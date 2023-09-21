"use strict";
class Staff {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}
let staff5 = new Staff(5, "Mike");
class StringStaff {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}
let staff4 = new StringStaff("5", "Mike");
class NumberStaff {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}
let staff3 = new NumberStaff(3, 6);
class Members {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
}
let Menber1 = new Members(5, "Mike");
let Menber2 = new Members("5", "Mike");
let Menber3 = new Members(5, 8);
function wrapInArray(value) {
    return [value];
}
