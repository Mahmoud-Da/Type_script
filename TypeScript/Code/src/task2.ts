// 1から100までの数字を順番に表示するプログラムを作成してください。ただし、3の倍数は"Fizz"、
// 5の倍数は"Buzz"、3と5の両方の倍数は"FizzBuzz"と表示してください。
function fizzBuzz(n: number): string | number {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}
