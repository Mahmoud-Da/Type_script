"use strict";
function show_first_two_char(string) {
    if (!string) {
        return "Enter string here, please!";
    }
    switch (true) {
        case string.length === 0:
            return "";
        case string.length >= 2:
            return string.substring(0, 2);
        default:
            return string;
    }
}
console.log(show_first_two_char(""));
console.log(show_first_two_char("Hello"));
console.log(show_first_two_char("He"));
console.log(show_first_two_char("H"));
