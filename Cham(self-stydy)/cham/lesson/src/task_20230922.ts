// 1から100までの数字を順番に表示するFizzBuzz関数を作成してください。ただし、3の倍数は"Fizz"、
// 5の倍数は"Buzz"、3と5の両方の倍数は"FizzBuzz"と表示してください。
function FizzBuzz(number: number): string {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return "Lili";
  }
}
function LoobFizzBuzz(): string[] {
  const result: string[] = [];
  for (let i = 1; i < 101; i++) {
    result.push(FizzBuzz(i));
  }

  return result;
}
