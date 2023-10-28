"use strict";
let stack = [];
function add_number(array, number) {
    if (array.length != 3 && typeof number != "string") {
        array.push(number);
    }
    return array;
}
function stack_remove_number(array) {
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
let queue = [];
function queue_remove_number(array) {
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
