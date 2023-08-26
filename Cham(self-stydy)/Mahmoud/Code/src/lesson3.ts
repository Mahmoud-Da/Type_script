// JS
// 条件分岐 if and switch　書き方の違い
//信号アルゴリズム  Yellow Red Green
const color1 = "Green";

if (color1 === "Green") {
  console.log("進んでください");
} else if (color1 === "Yellow") {
  console.log("要注意");
} else if (color1 === "Red") {
  console.log("停止してください");
} else {
  console.log("ワイワイ");
}

// TS
const color2: string = "Green";

if (color2 === "Green") {
  console.log("進んでください");
} else if (color2 === "Yellow") {
  console.log("要注意");
} else if (color2 === "Red") {
  console.log("停止してください");
} else {
  console.log("ワイワイ");
}

// TypeScript 書き方
let sales1: number = 123;
let course2: string = "TypeScript";
let is_published2: boolean = true;

//　この感じもできる
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;

//　配列の書き方 stringだけ
let a: string[] = ["a", "b", "c"];

//　配列の書き方 stringとnumberだけ
let h: (string | number)[] = ["a", "b", "c", 2, 3];

//　配列の書き方 stringとnumberとbooleanだけ
let g: (string | number | boolean)[] = ["a", "b", "c", 2, 3, true];

// any型
let b: any[] = ["a", "b", "c", 2, 3];
let c;

// tuble
// User ID:number and name:string
let user: [number, string] = [1, "moody"];

// Enums
// JavaScripts
const small = 1;
const medium = 2;
const large = 3;

// TypeScript Enums
enum SizeTshirts {
  Small,
  Medium,
  Large,
  Xlarge,
}

// Small = 0, Medium = 1, Large = 2

let mySize: SizeTshirts = SizeTshirts.Small;

let cham_size: SizeTshirts = SizeTshirts.Small;

enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
enum SizeBag {
  Small = "s",
  Medium = "m",
  Large = "l",
}

const enum SizeSandwish {
  Small = 1,
  Medium,
  Large,
}
// Small = 1, Medium = 2, Large = 3

// Functions
function calculateTax(income: number) {
  return income * 1.2;
}

console.log(calculateTax(3500000));

// からのfunction
function calculateTax1(): void {}

// select a type
function calculateTax2(income: number): number {
  return income * 1.2;
}

// 強制的なパラメーターの際に
function calculateTax3(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.2;
}

calculateTax3(10323, 23);

// 任意的なパラメーターの際に
// 1
function calculateTax4(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  }
  return income * 1.2;
}

calculateTax4(10323);

// 2
function calculateTax5(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.2;
}

calculateTax5(10_000);

// Objects
let employ = { id: 1 };

let employ2: {
  id: number;
  name?: string;
  retire?: (date: Date) => void;
} = {
  id: 1,
  name: "hana",
  retire: (date: Date) => {
    console.log(date);
  },
};
