// match メソッド：
let users: string = "user-0, user1, user-d, user-k, myuser";
let result1: RegExpMatchArray = users.match(/user-\d/gim)!;
console.log(result1); //['user-0']

let users1: string = "user-0, user-1, user-d, user-k, myuser";
let result3: RegExpMatchArray = users.match(/user-\d/gim)!;
console.log(result1); //['user-0', 'user-1']

let string: string = "l, jgo, owe12309, j, oij, ger";
let result2: RegExpMatchArray = string.match(/j\w/gim)!;
let result4: RegExpMatchArray = string.match(/j/gim)!;
let result5: RegExpMatchArray = string.match(/\wj/gim)!;
console.log(result2); //['jg']
console.log(result4); //(3)['j', 'j', 'j']
console.log(result5); //['ij']
