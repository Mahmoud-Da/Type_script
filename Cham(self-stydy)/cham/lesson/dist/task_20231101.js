"use strict";
function sumNumber(number1, number2, number3) {
    let sum = number1 + number2 + number3;
    if (typeof number1 !== "number" &&
        typeof number2 !== "number" &&
        typeof number3 !== "number") {
        return "数字を記入してください。";
    }
    else if (sum > 100) {
        let result = (number1 + number2 + number3) / 3;
        let exlain = "その数は100を超えています。3つの数値の平均は";
        return exlain + result;
    }
    return sum;
}
sumNumber(1, 3, 0);
sumNumber(0, 0, 0);
sumNumber(18, 45, 40);
sumNumber(8, 45, 40);
