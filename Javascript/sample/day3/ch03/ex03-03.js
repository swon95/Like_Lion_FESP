// prototype 이용해서 작성(ex03-01.js 파일 참조)
var Person = function(name){
  
};

var kim = new Person('김철수');
var lee = new Person('이영희');

console.log(kim.getName());	// 김철수
console.log(lee.getName());	// 이영희
kim.setName('홍길동');
console.log(kim.getName());	// 홍길동

console.log(kim.getName == lee.getName);	// true
console.log(kim.setName == lee.setName);	// true