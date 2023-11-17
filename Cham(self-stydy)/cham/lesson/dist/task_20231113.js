"use strict";
function strings(...args) {
    if (typeof args !== "string" && args.length === 0) {
        return "文字を記入してください。";
    }
    console.log("****************");
    for (let i = 0; i < args.length; i++) {
        console.log("・" + args[i] + " *");
    }
    console.log("****************");
    return args;
}
strings("anh", "ban", "toi");
strings();
