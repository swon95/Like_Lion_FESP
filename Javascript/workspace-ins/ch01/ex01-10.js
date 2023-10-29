var stack = [];
// 100, 200, 300 저장
stack.unshift(100);
stack.unshift(200);
stack.unshift(300);
// 300
// 200
// 100
console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());

var queue = [];
// 100, 200, 300 저장
stack.unshift(100);
stack.unshift(200);
stack.unshift(300);
// 100
// 200
// 300
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack , queue);