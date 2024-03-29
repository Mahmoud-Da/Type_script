// Complier・コンパイラ
// コンパイラとは、人間に分かりやすく複雑な機能や構文を持つ高水準プログラミング言語で書かれたコンピュータプログラムを、コンピュータが解釈・実行できる形式に一括して変換するソフトウェアです。
// 簡単に言うと：人間を分かりやすいコードを書かれた言語　➡　コンピューターが読み込める言語に変更される（interpreter）

// 実行の際に：　TypeScirpt(Compiler) -> JavaScript (interpreter)
// JavaScriptは動的型付け、TypeScriptは静的型付け
// TypeScriptではJavaScriptと同様の構文が使える

// TypeScriptとは：JavaScript+タイプチエック
// TypeScriptの中で、JavaScriptのままのコードを書ける　（ただ生JavaScriptの書き方をしない方がいい　＝＞　TyoeScript意味なくなるから）

// TypeScriptの強み：
// 1. refactoring「リファクタリング」しやすい
// （リファクタリングとは：　ソフトウェアの挙動を変えることなく、その内部構造を整理することです。）
// 2. Static typing・静的型付け：「スタテック」タイピングできる
// （スタテックタ：　変数の型を指定可能プログラミング言語）
// 型定義ができることで、変数に定義した型と割り当てた値の型が異なる場合にコンパイルエラーが発生するため、バグチェックに有効です。

// TypeScriptの弱み：
// 1.completion　Browerが直接読めない（Brower: JavaScriptしか読めない）＝＞　（TS は　JS より遅い）
// 2.コードが長くなる

// TypeScriptのメリット:
// 1. JavaScriptとの互換性が高い ➡　JavaScriptで作成したファイルをTypeScriptから呼び出したり、JavaScriptに向けて開発されたライブラリやフレームワークをTypeScriptで使用できる。
// 2.　エラーを防止できる
// 　変数の型と値が異なる場合はコンパイルエラーとなるため、プログラム全体のエラーを防止できる。
// 　TypeScriptはコンパイラオプションを使い、null や undefined である可能性を持った変数をチェックすることで、コードの問題を発見し、修正しやすくなる。

// 小プロジェクトなら　＝＞　JS
// 中大プロジェクトなら　＝＞　TS

// Install Type_script:
// 1. nodejs.org にアクセス
// 2. npm i -g typescript ターミナルにうつ
//     (i => install, -g installing globally)
// 3. tsc --v (check version)　チックする
//     (tsc =>  Type Script Compiler)
// 4. tsc --init   ターミナルにうつ
// TypeScriptの実行方法： tsc && node lesson1.js
