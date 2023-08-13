// Type Aliases
// before we use
let employe: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "moody",
  retire: (date: Date) => {
    console.log(date);
  },
};

// after we use
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "moody",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Type

function kgToLbs(weight: number | string) {
  // Narrow
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10");

// Literal Types (exact, specific)

// value only take 50 or 100 as value
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable Types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

greet(undefined);

// Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);

// before
if (customer !== null && customer !== undefined) console.log(customer.birthday);

// after
// 1- Opptional property access operator (.?)
console.log(customer?.birthday);

// 2- Opptional element access operator (when dealing with arrays)
let array0: string[] = ["0", "1", "2"];

// before
if (array0 !== null && array0 !== undefined)
  console.log(array0[4].toUpperCase());

// after
console.log(array0[0]?.toLocaleUpperCase());

// 3- Optional Call
let log: any = null;
log?.("a");

// Nullish Coaelscing Operator

let speed: number | null = null;
let ride = {
  //  Falsy (undefined, null, '', false, 0)
  speed1: speed || 30, // if speed is 0 we will got 30
  speed2: speed !== null ? speed : 30, // we will solve the problem
  // Nullish Coaelscing Operator (undefined, null)
  speed3: speed ?? 30,
};

// Type Assertion
// to tell the compiler that we know more of the type of this object (not convert)
let phone = document.getElementById("phone");
// HTML Element is class in JS define any html element (parent class)
// phone. we can't see the value property
let phone1 = document.getElementById("phone") as HTMLInputElement;
phone1.value;
// or another way
let phone2 = <HTMLInputElement>document.getElementById("phone");

// Unkown Type
function render(document: any) {
  document.move();
  document.fly();
}

function render1(document: unknown) {
  if (typeof document === "string") {
    document.toLocaleUpperCase();
  }
  // document.fly();  we got error
}

// Never Type
function processEvent(): never {
  while (true) {
    console.log("hi");
  }
}

// processEvent();
// console.log("h"); we will have an error that this code not reachble

// another example
function reject(message: string): never {
  throw new Error(message);
}
