"use strict";
class hairSalon {
    constructor(staff_name, old, style) {
        this.staff_name = staff_name;
        this.old = old;
        this.style = style;
    }
    greet() {
        console.log(`Hair salon's staff is ${this.staff_name}, ${this.old} years old, specializes in ${this.style} hair`);
    }
    info() {
        console.log("hairSalon");
    }
}
const staff1 = new hairSalon("Mikey", 26, "short");
staff1.greet();
staff1.info();
const staff2 = new hairSalon("James", 30, "long");
staff2.greet();
staff2.info();
class HairSalon {
    constructor(id, staff_name, old, style) {
        this.id = id;
        this.staff_name = staff_name;
        this.old = old;
        this.style = style;
    }
    greet() {
        const info = `${this.id}Hair salon's staff is ${this.staff_name}, ${this.old} years old, specializes in ${this.style} hair`;
        if (typeof this.info === "string") {
            console.log(info);
            return info;
        }
        else {
            return 404;
        }
    }
    info() {
        console.log("TypeScript");
    }
}
const sta1 = new HairSalon(1, "Mikey", 26, "short");
sta1.greet();
const sta2 = new HairSalon(2, "James", 30, "long");
sta2.greet();
