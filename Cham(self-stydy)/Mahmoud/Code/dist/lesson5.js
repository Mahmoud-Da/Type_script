"use strict";
class JavaScirpt {
    constructor(file_name, path) {
        this.file_name = file_name;
        this.path = path;
    }
    greet() {
        console.log(`file name is ${this.file_name}, it is in ${this.path}`);
    }
    info() {
        console.log("JavaScript");
    }
}
const js1 = new JavaScirpt("lili", "3");
js1.greet();
js1.info();
class TypeScript {
    constructor(id, file_name, path, type) {
        this.id = id;
        this._file_name = file_name;
        this.path = path;
        this.type = type;
    }
    greet() {
        const message = `${this.id}file name is ${this._file_name}, it is in ${this.path}, ${this.type}`;
        if (typeof this._info === "string") {
            console.log(message);
            return message;
        }
        else {
            return 404;
        }
    }
    _info() {
        console.log("TypeScript");
    }
}
const ts1 = new TypeScript(1, "index1", "download");
const ts2 = new TypeScript(2, "index2", "desktop");
ts1.greet();
class Person {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    set fullName(value) {
        const parts = value.split(" ");
        if (parts.length === 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
        else {
            console.error("Invalid full name format. Use 'First Last'.");
        }
    }
}
class Student extends Person {
    get fullName() {
        return "Student " + super.fullName;
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
const person = new Person(1, "John", "Doe");
console.log(person.fullName);
