"use strict";
class Membership {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
}
let membership1 = new Membership(1, "lili");
class StringMembership {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
}
let membership2 = new StringMembership("1", "lili");
class KeyValue {
    constructor(key, name) {
        this.key = key;
        this.name = name;
    }
}
let key1 = new KeyValue(1, "hello");
let key2 = new KeyValue(2, 3);
let key3 = new KeyValue("3", "hello");
function wrapInArray(value) {
    return [value];
}
wrapInArray(1);
wrapInArray("1");
