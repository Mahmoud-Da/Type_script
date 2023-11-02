"use strict";
function sumNumber(array) {
    if (typeof array !== "number" && array.length === 0) {
        return "数字を記入してください。";
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        result = sum += array[i];
    }
    if (result > 100) {
        let exlain = "その数は100を超えています。3つの数値の平均は";
        return exlain + result / array.length;
    }
    return result;
}
sumNumber([1, 2, 5]);
sumNumber([]);
sumNumber([18, 45, 40]);
sumNumber([8, 45, 40]);
