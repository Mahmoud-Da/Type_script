// 課題29

//  与えられた数値の因数を生成する関数を記述してください。

// この関数は整数をパラメータとして受け取り、数値の順序で素因数を含む整数のリスト（ObjC: 整数を表すNSNumberの配列）を返します。

// Examples
// 1 ==> []
// 3 ==> [3]
// 8 ==> [2, 2, 2]
// 9 ==> [3, 3]
// 12 ==> [2, 2, 3]

// Write a function that generates factors for a given number.

// The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers).
// That list contains the prime factors in numerical sequence.

function integers(number: number): number[] | string {
  if (number === 1 || typeof number != "number") {
    return "Enter number greater than 1 in here, please!";
  }
  let integer: number[] = [];
  for (let i = 2; i < number; i++) {
    if (i + 1 === number) {
      return integer;
    }
    for (let j = number % i; j < number; j++) {
      if (j === 0) {
        result = integer.splice(integer.length, 0, i);
      }
    }
  }
  return result;
}

// test
integers(1);
integers(3);
integers(6);
integers(8);
integers(25);
integers(99);
