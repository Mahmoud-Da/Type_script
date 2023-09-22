"use strict";
function FizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }
    else if (number % 3 === 0) {
        return "Fizz";
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else {
        return "Lili";
    }
}
function LoobFizzBuzz() {
    const result = [];
    for (let i = 1; i < 101; i++) {
        result.push(FizzBuzz(i));
    }
    return result;
}
