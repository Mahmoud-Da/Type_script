"use strict";
let users = "user-0, user1, user-d, user-k, myuser";
let result1 = users.match(/user-\d/gim);
console.log(result1);
let users1 = "user-0, user-1, user-d, user-k, myuser";
let result3 = users.match(/user-\d/gim);
console.log(result1);
let string = "l, jgo, owe12309, j, oij, ger";
let result2 = string.match(/j\w/gim);
let result4 = string.match(/j/gim);
let result5 = string.match(/\wj/gim);
console.log(result2);
console.log(result4);
console.log(result5);
