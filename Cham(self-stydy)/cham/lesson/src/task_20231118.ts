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

function primeFactors(number: number): number[] | string {
  if (!number) {
    return "Enter number in here, please!";
  }
  let factors: number[] = [];
  if (number === 1) {
    return factors;
  }
  let divisor: number = 2;
  while (number >= 2) {
    if (number % divisor == 0) {
      number = number / divisor;
      factors.push(divisor);
    } else {
      divisor++;
    }
  }
  return factors;
}

// test
primeFactors(1);
primeFactors(3);
primeFactors(6);
primeFactors(8);
primeFactors(9);
primeFactors(12);
