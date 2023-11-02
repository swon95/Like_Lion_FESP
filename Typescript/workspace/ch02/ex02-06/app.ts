import type { Data } from "./math";

var data: Data = { a: 10, b: 20 };

import MyMath from './math.js';
console.log(1, MyMath.sum(data));
console.log(1, MyMath.substract(data));
console.log(1, MyMath.divide(data));

import {sum, substract} from './math.js';
console.log(2, sum(data));
console.log(2, substract(data));