"use strict";
class KeyVlauePair1 {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let key1 = new KeyVlauePair1(1, "mosh");
class StringKeyVlauePair1 {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let key2 = new StringKeyVlauePair1("1", "mosh");
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "a");
function wrapInArray(value) {
    return [value];
}
let numbers1 = wrapInArray(1);
function echo1(value) {
    value;
}
function echo2(value) {
    value;
}
function echo3(value) {
    value;
}
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        category;
        return [];
    }
}
let property1;
let property;
property = "name";
property = "price";
let product12;
let product13;
let product14;
let product15;
let product16;
//# sourceMappingURL=index6.js.map