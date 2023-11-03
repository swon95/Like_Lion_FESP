(()=>{
    // 기본 데이터 타입은 추론에 맞기고
  var name = 'kim'
  var age = '30'
  var address: string // 선언을 먼저 할 경우 타입을 지정하기
  address = '경기도'
//   address = 100

interface Todo {
    title: string
    content: string
}

// 객체는 타입 별칭이나 인터페이스를 지정해야 안전하게 사용 가능
var todo1: Todo = {
    title: '제목 1',
    content: '내용 1',
}
})();