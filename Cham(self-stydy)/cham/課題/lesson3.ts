// JavaScript: [number, string, boolean, null, undefined, object]
// TypeScript: [JavaScript same types + [any, unknown, never, enum, tuble]]

/* number */
// JS
let number = 2345;
const hana = 347;
// TS
let number1: number = 679;
const kaka: number = 58963;

/* string */
// JS
let mike = "I'm Mike";
const a = "Lyly";
// TS
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}.
I'm a ${title}`;

console.log(profile);

// 結果：
// I'm John.
// I'm a Web Developer.

/*　boolean */
// TS
let pending: boolean;
pending = true;
// after a while
// ..
pending = false;

/* any amything の意味：string も　number　も boolean　オーケー */
let result: any = true;
result = "ok";
result = 9;
let sp1: any[] = [2, "Corddoba Guitar Guclcor", true];
