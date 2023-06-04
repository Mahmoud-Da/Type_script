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
