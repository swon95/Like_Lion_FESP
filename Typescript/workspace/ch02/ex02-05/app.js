var data = { a: 10, b: 20 };

// import MyMath, {sum, substract} from './math.js';
// console.log(1, sum(data));
// console.log(1, substract(data));
// console.log(1, MyMath.divide(data));

// import {sum as add} from './math.js';
// console.log(1, add(data));

import * as MyMath from "./math.js";
console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
console.log(1, MyMath.divide(data));
