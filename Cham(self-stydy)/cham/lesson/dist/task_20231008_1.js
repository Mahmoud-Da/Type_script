"use strict";
function findLongestWord(string) {
    if (!string) {
        return "文を書いてください。";
    }
    let array = string.match(/\w[a-z]{0,}/gi);
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        if (result.length < array[i].length) {
            result = array[i];
        }
    }
    return result;
}
findLongestWord("I am LiLi, and I am a guinea pig");
