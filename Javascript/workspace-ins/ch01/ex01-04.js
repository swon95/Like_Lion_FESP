// Symbol
var s1 = Symbol('hello');
var s2 = Symbol('world');
var s3 = Symbol('hello');

console.log(s1 === s2);
console.log(s2 === s3);
console.log(s1 === s3);

console.log(s1, s2, s3);

// Symbol.for(): 자바스크립트 엔진이 관리하는 전역 심볼 레지스트리에 저장됨
var obj = {
  'hello': 10,
  'world': 20
};
obj.hello = 30;
console.log(obj);

var obj2 = {
  [Symbol('hello')]: 10,
  [Symbol('world')]: 20,
};
obj2[Symbol('hello')] = 30;
console.log(obj2);