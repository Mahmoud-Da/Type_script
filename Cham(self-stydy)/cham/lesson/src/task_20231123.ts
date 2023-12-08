// 課題31

// 10個の整数（0から9の間）からなる配列を受け入れ、それらの数字を電話番号の形式で返す関数を書いてください。

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(array: number[]) {
  let firstNumberPhone: number[] = array.slice(0, 3);
  let midlleNumberPhone: number[] = array.slice(3, 6);
  let lastNumberPhone: number[] = array.slice(6, 11);

  if (array.length < 10) {
    return "Phone number is incorrect.";
  }
  return (
    "(" +
    firstNumberPhone.join("") +
    ")" +
    " " +
    midlleNumberPhone.join("") +
    "-" +
    lastNumberPhone.join("")
  );
}

// test
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
