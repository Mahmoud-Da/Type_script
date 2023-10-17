// 課題15
// 数値をパラメータとして受け取り、その数値がオートモーフィックかどうかをチェックした後、
// TrueまたはFalseを返す関数を書いてください。オートモーフィック数は、その数自体と同じ数字で「終わる」数のことです。

// 使用例:
// 例１:
// Input: 6 => Output: オートモーフィック数字です

// 例2:
// Input: 4 => Output: オートモーフィック数字じゃないです。

// Write a function which receives a number as a parameter and returns True or False after checking if the number is Automorphic or not.
// An automorphic number is a number whose square "ends" in the same digit as the number itself.

function automorphic(number: number): string {
  let square: number = number * number;
  let string: string = square.toString(10);
  let newNumber: string = number.toString(10);
  let result: string = string.slice(-newNumber.length);
  if (result === newNumber) {
    return "オートモーフィック数字です。";
  }
  return "オートモーフィック数字じゃないです。";
}

// test
automorphic(5);
automorphic(4);
automorphic(76);
