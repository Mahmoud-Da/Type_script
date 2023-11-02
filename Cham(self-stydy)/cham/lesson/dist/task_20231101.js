"use strict";
function sumNumber(...args) {
    if (typeof args !== "number" && args.length === 0) {
        return "数字を記入してください。";
    }
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        result = sum += args[i];
    }
    if (result > 100) {
        let exlain = "その数は100を超えています。3つの数値の平均は";
        return exlain + result / args.length;
    }
    return result;
}
sumNumber(1, 2, 5);
sumNumber();
sumNumber(18, 45, 40);
sumNumber(8, 45, 40);
