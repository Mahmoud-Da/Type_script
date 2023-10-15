"use strict";
function liliSearch(name) {
    let array = name.match(/\w[a-z]{0,}/gi);
    let search = array.indexOf("lili");
    if (search === 0) {
        return true;
    }
    if (search === 1) {
        return true;
    }
    return false;
}
liliSearch("my dog's name is mada");
liliSearch("lili is my mouse");
liliSearch("my lili is a female mouse");
liliSearch("my mama love lili so much");
