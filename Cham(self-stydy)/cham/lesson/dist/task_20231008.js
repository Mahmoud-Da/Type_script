"use strict";
function existsSameValue(string) {
    function arrayIsUnique(array, size) {
        let flag = 0;
        for (let i = 0; i < size - 1; ++i) {
            for (let j = i + 1; j < size; ++j) {
                if (array[i] === array[j]) {
                    flag = 1;
                    break;
                }
            }
        }
        return flag;
    }
    let array = Array.from(string);
    let check = arrayIsUnique(array, array.length);
    if (check === 1) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
existsSameValue("cham");
existsSameValue("lili");
