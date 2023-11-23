// / 課題30

// 数字だけを含む配列を受け取り、最初と真ん中と最後の要素を返すそれぞれの関数を作成してください。
// getFirstValue([1, 2, 3]) ➞ 1

// getMiddleValue([80, 5, 100]) ➞ 5
// getMiddleValue([80, ,10, 5, 20, 100]) ➞ 5

// getlastValue([-500, 0, 50]) ➞ 50

// Please create functions that take an array containing only numbers and
// return the first, middle, and last elements, respectively.

function getFirstValue(array1: number[]): number | string {
  return array1[0];
}

// test
getFirstValue([2, 5, 7, 9, 10]);
getFirstValue([5, 7, 9, 10]);

function getMiddleValue(array2: number[]): number | string {
  if (array2.length % 2 === 0) {
    return "Enter an odd number of elements here, please!";
  }
  return array2[Math.round(array2.length / 2) - 1];
}

// test
getMiddleValue([2, 5, 7, 9, 10]);
getMiddleValue([2, 5, 9, 10]);

function getlastValue(array3: number[]): number | string {
  return array3[array3.length - 1];
}

// text
getlastValue([2, 5, 7, 9, 10]);
