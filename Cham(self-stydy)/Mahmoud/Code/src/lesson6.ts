// Generic

// Genericなしで
class Membership {
  constructor(public key: number, public name: string) {}
}
let membership1 = new Membership(1, "lili");

class StringMembership {
  constructor(public key: string, public name: string) {}
}
let membership2 = new StringMembership("1", "lili");

// Generic class
class KeyValue<key, value> {
  constructor(public key: key, public name: value) {}
}

let key1 = new KeyValue<number, string>(1, "hello");
let key2 = new KeyValue<number, number>(2, 3);
let key3 = new KeyValue<string, string>("3", "hello");

// Generic fuction

function wrapInArray<T>(value: T) {
  return [value];
}

// 指定してもしなくてもオッケー
wrapInArray<number>(1); //=> [1]
wrapInArray("1"); //=> [1]
