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

function add_number(array: number[], number: number): number[] {
  if (array.length != 3 && typeof number != "string") {
    array.push(number);
  }
  return array;
}

function stack_remove_number(array: number[]): number[] {
  if (array.length >= 1) {
    array.pop();
  }
  return array;
}

add_number(stack, 1);
add_number(stack, 2);
add_number(stack, 3);
add_number(stack, 3);
stack_remove_number(stack);

console.log(stack);

// 追加課題 queue
// 最初に入る最初出る

let queue: number[] = [];

function queue_remove_number(array: number[]): number[] {
  if (array.length >= 1) {
    array.shift();
  }
  return array;
}

add_number(queue, 4);
add_number(queue, 5);
add_number(queue, 6);
queue_remove_number(queue);
console.log(queue);
