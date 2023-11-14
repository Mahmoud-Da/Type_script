"use strict";
function strings(...args) {
    if (typeof args !== "string" && args.length === 0) {
        return "文字を記入してください。";
    }
    for (let i = 0; i < args.length; i++) {
        console.log("・" + args[i] + " *");
    }
    return args;
}
strings("anh", "ban", "toi");
strings();
