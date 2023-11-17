//課題28
// 文字列のリストを受け取り、それらを一つずつ、四角形の枠内に印刷する関数を作成します。
// 例えば、リスト["Hello", "World", "in", "a", "frame"] は次のように印刷されます：

// ・Hello *
// ・World *
// ・in *
// ・a *
// ・frame *

// Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

function strings(...args: string[]): string | string[] {
  if (typeof args !== "string" && args.length === 0) {
    return "文字を記入してください。";
  }
  console.log("****************");
  for (let i = 0; i < args.length; i++) {
    console.log("・" + args[i] + " *");
  }
  console.log("****************");
  return args;
}

//test
strings("anh", "ban", "toi");
strings();
