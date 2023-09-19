"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Example = () => {
    const user = { name: "Teru", age: 20 };
    const userProfile = {
        name: "Yuko",
        age: 20,
        gender: "woman",
    };
};
exports.default = Example;
const maybeUserId = localStorage.getItem("userId");
if (typeof maybeUserId === "string") {
    const userId = maybeUserId;
}
const p = {
    x: 0,
    y: 1,
    z: 2,
};
const book1s = undefined;
const title1 = book1s === null || book1s === void 0 ? void 0 : book1s[0];
console.log(title1);
const book2s = ["サバイバルTypeScript"];
const title2 = book2s === null || book2s === void 0 ? void 0 : book2s[0];
console.log(title2);
const book2 = { author2: { email: "alice@example.com" } };
const authorEmail2 = (_a = book2 === null || book2 === void 0 ? void 0 : book2.author2) === null || _a === void 0 ? void 0 : _a.email;
console.log(authorEmail2);
const isTrue = true;
const num1 = 123;
const str = "foo";
let num2 = 1;
const searchResults = {
    video: { name: "LEGO Movie" },
    text: null,
    audio: { name: "LEGO Movie Soundtrack" },
};
