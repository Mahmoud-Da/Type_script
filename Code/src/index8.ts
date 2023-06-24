// Cheat Sheet
// Exporting and importing
// shapes.ts
// export class Circle {}
// export class Square {}
// app.ts
// import { Circle, Square as MySquare } from "./index8_shape1";

// Default exports
// shapes.ts
// export default class Circle {}
// app.ts
import Circle, { Format } from "./index8_shape2";
let circle2 = new Circle();

console.log(circle2, Format);
// Wildcard imports
// app.ts
import * as Shapes from "./index8_shape1";
let circle = new Shapes.Circle();
console.log(circle);

// Re-exporting
// /shapes/index.ts
// use export to import and exprot modlues in one go
// export { Circle } from "./circle";
// export { Square } from "./square";
// // app.ts
// import { Circle, Square } from "./index8_shape3";
