"use strict";
function greeting(string) {
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
greeting("");
greeting("Hello");
greeting("He");
greeting("H");
