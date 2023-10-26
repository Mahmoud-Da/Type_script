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

let stack: number[] = [];
stack.push(3);
console.log(stack); // [3]

stack.push(6);
console.log(stack); // [3,6]

stack.push(8);
console.log(stack); // [3,6,8]

stack.pop();
console.log(stack); //[3,6]

stack.pop();
console.log(stack); //[3]
