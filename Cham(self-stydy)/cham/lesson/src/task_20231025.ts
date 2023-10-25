// 課題21

// スタックを実装し、ユーザーからの3つの入力をスタックにプッシュします。
// 最初に空のスタックを表示します。その後、3つの要素をスタックにプッシュします。プッシュごとにスタックを表示します。
// 最後に、トップの要素を1度だけポップし、スタックを表示します。

// 使用例：

// Enter the 1st number:
// 3
// Enter the 2nd number:
// 6
// Enter the 3rd number:
// 8
// Stack:[]
// [3]
// [3, 6]
// [3, 6, 8]
// [3, 6]
// Implement a stack and take three inputs from user which are pushed on to the stack.
// Print the empty stack initially. Then push the three elements on the stack. After every push display the stack.
// In the end, pop out the topmost element only once and display the stack.

function numberStack(number: number): unknown {
  if (!number) {
    return "数字を記入して下さい。";
  }
  let stack: number[] = [];
  return stack.push(number);
}

// test

numberStack(2);
numberStack(3);
numberStack(5);
numberStack(6);
numberStack(7);
