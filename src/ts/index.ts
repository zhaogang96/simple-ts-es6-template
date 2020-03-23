// import "ts-polyfill/lib/index.js";
// import "ts-polyfill/lib/es2016-array-include.js";
import "core-js/es/object/assign";
import "core-js/es/array/includes";

import { flat } from "./tools";

flat();
const c = [1, 2, 42];
console.log(c.includes(1));
console.log(...c);
async function test() {
  console.log("2243f");
}
Object.assign({}, { a: { b: "122" } });
