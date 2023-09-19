// JavaScript: [number, string, boolean, null, undefined, object]
// TypeScript: [JavaScript same types + [any, unknown, never, enum, tuble]]

// undefinedは「値が代入されていないため、値がない」
// nullは「代入すべき値が存在しないため、値がない」

/* number */
// JS
let number = 2345;
const hana = 347;
// TS
let number1: number = 679;
const kaka: number = 58963;

/* string */
// JS
let mike = "I'm Mike";
const a = "Lyly";
// TS
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}.
I'm a ${title}`;

console.log(profile);

// 結果：
// I'm John.
// I'm a Web Developer.

/*　boolean */
// TS
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;

/* any anything の意味：string も　number　も boolean　オーケー */
// anyはTypeScriptが型のチェックを放棄した型です。anyの使用を避ける。エラーが実行しか発見しないから。
// unknown はTypeScriptが型をチェックする。

let result: any = true;
result = "ok";
result = 9;
let sp1: any[] = [2, "Corddoba Guitar Guclcor", true];

function getData(callback: any) {
  callback();
}
getData("abc"); //TypeError: callback is not a function

function getData1(callback1: unknown) {
  // callback1(); //callback1 is of type unknown
}
getData1("abc");

/* enum は名前付き定数値のグループです。 Enum は列挙型を表す。*/
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}
console.log(isItSummer(Month.Jun)); // true

/* tuble */
//配列と同じですが、各値を異なる型に初期化できる。
let skill: [string, number];
skill = ["Programming", 5];

let skill1: [string, number];
// skill1 = [5, "Programming"]; //error TS2322: Type 'number' is not assignable to type 'string'.

/*　object　*/
let myDog: {
  name: string;
  age: number;
  birthday: Date;
  bark: () => void;
} = {
  name: "Fido",
  age: 3,
  birthday: new Date("1990-01-01"),
  bark: () => console.log("Woof! Woof!"),
};

let car: {
  make: string;
  model: string;
  year: number;
  getFullName: () => string;
} = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getFullName: () => {
    return `${car.year} ${car.make} ${car.model}`;
  },
};

console.log(car.make); // "Toyota"
console.log(car.model); // "Camry"
console.log(car.year); // 2020
console.log(car.getFullName()); // "2020 Toyota Camry"
