// 선언문 방식의 함수 생성
function add(x, y){
  return x + y;
}

console.log(add(10, 20));
console.log(add.call(this, 10, 20));
console.log(add.apply(this, [10, 20]));