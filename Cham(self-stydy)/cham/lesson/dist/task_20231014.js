"use strict";
function liliSearch(name) {
    if (!name) {
        return "文書を記入して下さい！";
    }
    let array = name.match(/\w[a-z]{0,}/gi);
    let search = array.indexOf("lili");
    if (search !== -1) {
        return true;
    }
    return false;
}
liliSearch("my dog's name is mada");
liliSearch("lili is my guinea pig");
liliSearch("my lili is a female guinea pig");
liliSearch("my mama love lili so much");
