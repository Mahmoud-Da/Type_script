// Exercise 1: 変数とデータ型
// 質問: age という変数を宣言し、それをあなたの年齢に設定してください。次に、name という変数を宣言し、それをあなたの名前に設定してください。
let age = 18;

let name = "Cham";

// Exercise 2: 基本的な関数
// 質問: add という TypeScript 関数を作成し、a と b という二つのパラメータを受け取り、それらの合計を返すようにしてください。

function add(a: number, b: number): number {
  return a + b;
}

let monney = add(10, 20);
console.log(monney); // 30

// Exercise 3: 配列
// 質問: 三つの異なる果物の名前を含む fruits という名前の配列を宣言してください。その後、別の果物を配列に追加してください。

let fruits: String[] = ["Orange", "Grape", "Banana"];
fruits.push("Apple");
console.log(fruits); // [Orange, Grape, Banana, Apple]
