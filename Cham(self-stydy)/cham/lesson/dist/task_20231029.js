"use strict";
function upper_case_first_character_of_word(string) {
    if (!string && string.length === 0) {
        return "Enter string here, please!";
    }
    return string.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}
upper_case_first_character_of_word("my house");
upper_case_first_character_of_word("this is my pen");
upper_case_first_character_of_word("");
function upper_case(str) {
    if (!str && str.length === 0) {
        return "Enter string here, please!";
    }
    let array = str.split(" ");
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return new_array.join(" ");
}
upper_case("my house");
upper_case("this is my pen");
upper_case("");
