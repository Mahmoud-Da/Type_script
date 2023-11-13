// 課題27
// クリスマス・イブがもうすぐやってきますので、当然、サンタのためにミルクとクッキーを用意する必要があります！
// Date オブジェクトを受け入れ、それがクリスマス・イブ（12月24日）である場合は true を返し、そうでない場合は false を返す関数を作成してください。
// JavaScript の Date オブジェクトでは月が0から始まることに注意してください。
// つまり、12月は11番目の月で、一方、1月は0です。
// 例：

// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(
  years: number,
  months: number,
  dates: number
): boolean | string {
  let isChristmas: boolean = false;
  if (
    typeof years != "number" ||
    typeof months != "number" ||
    typeof dates != "number"
  ) {
    return "Enter number here, please!";
  }
  if (years === 0 || months === 0 || dates === 0) {
    return "Please fill in the correct data.";
  }
  if (months === 11 && dates === 24) {
    return (isChristmas = true);
  }

  return isChristmas;
}

class date {
  constructor(public year: number, public month: number, public date: number) {}
  is_christmas() {
    if (
      typeof this.year != "number" ||
      typeof this.month != "number" ||
      typeof this.date != "number"
    ) {
      return "Enter number here, please!";
    }
    if (this.year === 0 || this.month === 0 || this.date === 0) {
      return "Please fill in the correct data.";
    }
    if (this.month === 11 && this.date === 24) {
      return true;
    }
    return false;
  }
}

//test
let Date1 = new date(2013, 11, 24);
console.log(Date1.is_christmas());

let Date2 = new date(3000, 12, 24);
console.log(Date2.is_christmas());

//test
timeForMilkAndCookies(2013, 11, 13);
timeForMilkAndCookies(2013, 11, 24);
timeForMilkAndCookies(0, 11, 24);
timeForMilkAndCookies(2013, 0, 24);
timeForMilkAndCookies(2013, 11, 0);
timeForMilkAndCookies(1889, 11, 24);
timeForMilkAndCookies(1889, 1, 24);
