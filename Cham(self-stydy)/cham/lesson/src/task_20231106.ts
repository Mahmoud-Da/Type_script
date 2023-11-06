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

function date(years: number, month: number, date: number): boolean {}
