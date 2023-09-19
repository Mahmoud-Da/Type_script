"DOM (Document Object Model) "; //とは、ウェブページの内容をツリー状に構造化して操作可能にしたものです。

// DOMを利用することで、
//   ->Webページの、テキストの書き換え、追加、削除
//   ->色や大きさなどのスタイルの変更
//   ->その他の色々な処理
// を行うことができます。

"1. DOMの前提知識";

//     *オブジェクト:
// オブジェクトとは、キー (名前) と 値 がペアになったデータの集まりのことです。
// ex:
const person1 = {
  age: 3,
  name: "lili",
};

object: person1;
// property: age:3とname:'lili' (「キー」と「値」のペア、オブジェクトの特徴や状態を表す。/プロパティの値：数字,文字。実行命令をまとめた「関数」が入っていることがある)

// 　　*メソッド:　関数が入ったプロパティ, オブジェクトの動きを表す。
// ex:
const person2 = {
  age: 3,
  name: "lili",
  hello: function () {
    console.log("Hello");
  },
};

//     *呼び出し方:
// property: object名.property名
// method：object名.method名

// ex:
const person3 = {
  age: 5,
  name: "lili",
  hello: function () {
    console.log("Hello");
  },
};
console.log(person3.name); // lili
person3.hello(); // Hello

// 　*ブラウザオブジェクト
// Windowオブジェクトを頂点とした階層構造になっている（Navigator, History, Location, Scree, Document)

// ブラウザを操作する:
//     「アラート」を出す              ➡      Window-method
//     「ブラウザの種類」を知る        ➡      Navigator-property
//     「前のページ」に移動する        ➡      History-method
//     「指定したURL」に移動する       ➡      Location-method
//     「スクリーンの幅」を知る        ➡      Screen-property
//     「文書」を書く                 ➡       Document-method

//     *インターフェース
// インターフェース（interface）とは、異なる「機器同士」や「コンピューターと人」「コンピューターとプログラム」などを繋ぐ共有部分や規格、仕様 のことを指す。

// 「機器同士」を繋ぐインターフェース：　「ハードウェアインターフェース」
//     ・「USB、HDMI、プリンター、HDD」などのハードウェアそのもの
//     ・そのコネクターの形状の「規格」や「仕様」
//     ・「送受信の約束事」
// 「コンピューター」と「人」を繋ぐインターフェース：　「ユーザーインターフェース（UI）」
//     ・コンピューターを操作するためのキーボードやマウスなどの「操作機器」
//     ・何かを検索する際に使用する検索窓などの「操作する手段」や「操作性」
//     ・HPのデザインやレイアウト、フォントなど「表示方法」
// 「コンピューター」と「プログラム」を繋ぐインターフェース：API　「ソフトウェアインターフェース」
// APIとは、アプリケーションプログラミングインターフェースの略で、アプリケーションとプログラムを繋ぐものです。

("2. DOM");

//     *Document Object Model: DOM
// HTMLなどの「ドキュメント」をツリー状の「オブジェクト」の集まりで表現し、操作可能にしたものです。
// DOMツリーには「Documentオブジェクト」からアクセスすることができる。
//     *Documentオブジェクト:　ドキュメント（文書）を操作することができるオブジェクトです。
//     *ノード(Node): DOMツリーの各オブジェクト
// Nodeオブジェクトには、DOMツリーを検索したり操作するためのプロパティやメソッドが用意されておく。
//     オブジェクトの種類：
//         ドキュメントノード：ドキュメント全体を表す（ドキュメントオブジェクト）
//         要素ノード：要素を表すオブジェクト
//         属性ノード：属性を表すオブジェクト
//         テキストノード：テキストを表すオブジェクト
//         コメントノード：コメントを表すオブジェクト
//         空白ノード：テキストノードの一種
//     すぐ上のノードは「親ノード」、すぐ下のノードは「子ノード」、同じレベルにあるノードは「兄弟ノード」

// ex:
// console.log(document.lastChild.lastChild.childNodes[1]);
// ➞document➞lastChild(html)➞lastChild(body)➞p(1)➞id
// documentから、最後の子ノード「html」の最後の子ノード「body」の、さらに２番目の子ノード「p」にアクセスしてる

// console.log(document.lastChild.firstChild.childNodes[1]);
// ➞document➞lastChild(html)➞firstChild(head)➞title(1)
// documentから、最後の子ノード「html」の最後の子ノード「head」の、さらに子ノード「title」にアクセスしてる
