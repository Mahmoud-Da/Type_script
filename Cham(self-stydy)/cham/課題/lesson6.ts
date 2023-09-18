// Generics（ジェネリクス）
// ジェネリックス(Generics)とは、型の安全性とコードの共通化を両立させるために導入された言語の仕様です。ジェネリクスを用いることで、型の安全性とコードの共通化を両立できるのだ。

// Generic を使わない例
class Staff {
  constructor(public number: number, public name: string) {}
}
let staff1 = new Staff(5, "Mike");

class StringStaff {
  constructor(public number: string, public name: string) {}
}
let staff2 = new StringStaff("5", "Mike");

class NumberStaff {
  constructor(public number: number, public name: number) {}
}
let staff3 = new NumberStaff(3, 6);
//何回も記入するのは大変になる

// Generic を使う例
class Members<key, name> {
  constructor(public key: key, public name: name) {}
}
let Menber1 = new Members(5, "Mike");
let Menber2 = new Members("5", "Mike");
let Menber3 = new Members(5, 8);
// コードが短くなり、記入は楽になる。

// Generic fuction
// 必要に応じてジェネリクスパラメータを呼び出すことができる。単純なジェネリックを使うときは T、U、Vを使うのが普通です。複数のジェネリクス引数がある場合は、意味のある名前を使用してください。例えばTKeyとTValueです(一般にTを接頭辞として使用する規約は、他の言語(例えばC++)では_テンプレート_と呼ばれることもある)。
function wrapInArray<T>(value: T) {
  return [value];
}
