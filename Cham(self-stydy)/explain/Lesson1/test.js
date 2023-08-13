"use strict";
// Complier
let i = "dodo"; //=> コードの読まれ方： 一回書いたコード「JS」に変更されて、その後実行されhちゃいます
// 実行の際に：　TypeScirpt(Compiler) -> JavaScript (interpreter)
// TypeScriptとは：JavaScript+タイプチエック
// つまり、TypeScriptの中で、JavaScriptのままのコードを書ける　（ただ生JavaScriptの書き方をしない方がいい　＝＞　TyoeScript意味なくなるから）
// TypeScriptの強み：
// refactoring「リファクタリング」しやすい　（リファクタリングとは：　コードの結果変更せずに、コードもっと綺麗にする（コードの整理））
// Static typing「スタテック」タイピングできる　（スタテックタ：　変数の型を指定可能プログラミング言語）
// TypeScriptの弱み：
// completion　Browerが直接読めない（Brower: JavaScriptしか読めない）＝＞　（TS は　JS より遅い）
// コードが長くなる
// 小さいプロジェクトなら　＝＞　JS
// 中か大きいプロジェクトなら　＝＞　TS
// Install Type_script:
// 1- nodejs.org にアクセス
// 2- npm i -g typescript ターミナルにうつ
// (i => install, -g installing globally)
// 3- tsc -v (check version)　チックする
// (tsc =>  Type Script Compiler)
// 4- tsc --init   ターミナルにうつ
