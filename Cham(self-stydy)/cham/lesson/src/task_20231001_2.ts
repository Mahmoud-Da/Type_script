// 課題６
// 素数かどうかを確認する: 数字が素数かどうかを確認するプログラムを作成してください。素数とは、1と自分自身以外に約数を持たない数のことです。
function prime(number: number): boolean | undefined {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i: number = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
      if (i + 1 === number) {
        return true;
      }
    }
  }
}

// test
prime(5); //true
prime(10); //false
