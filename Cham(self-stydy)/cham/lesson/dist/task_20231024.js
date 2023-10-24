"use strict";
function countWord(string, words) {
    let result = string.split(words).length - 1;
    return result;
}
countWord("I love you and our son", "ou");
countWord("I love you and our son", "o");
