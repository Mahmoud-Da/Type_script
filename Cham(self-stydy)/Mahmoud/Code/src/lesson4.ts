// type alias(自分でタイプ作成できる)
type Emplyee = {
  readonly id: number; // id 変更したダメだからreadonlyを追加
  name: string;
  retire: (date: Date) => void;
};

let cham2: Emplyee = { id: 1, name: "cham", retire() {} };
let lili: Emplyee = { id: 2, name: "lili", retire() {} };

// Intersection types
// 二つのタイプを持つ変数の際に
type PartTime = {
  jobName: string;
};

let cham1: Emplyee & PartTime = {
  id: 3,
  name: "cham",
  retire() {},
  jobName: "izakaya",
};
// Type Union
let weight: number | string = 1;
weight = "1kg";
weight = 1;

//  Literal types
type Visa = "student" | "work";

let moody: Visa = "work";

// Nullable types
let name2: string | null = null;

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

// Optional chaining (?.)

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

// Type Assertion　後で

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
processEvent();
// console.log("h"); we will have an error that this code not reachble
