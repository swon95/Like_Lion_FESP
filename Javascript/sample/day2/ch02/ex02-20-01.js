var todolist = [
  {
    "_id": 1,
    "title": "Javascript 공부",
    "done": true
  },
  {
    "_id": 2,
    "title": "Typescript 공부",
    "done": false
  },
  {
    "_id": 3,
    "title": "React 공부",
    "done": false
  },
  {
    "_id": 4,
    "title": "React 프로젝트",
    "done": true
  }
]

// sort() _id로 내림차순 정렬
todolist.sort();
console.log('정렬 결과', todolist);

// forEach() 완료된 할일 목록
var doneList = [];
todolist.forEach(function(){});
console.log('forEach() 완료된 할일 목록', doneList);

// filter() 완료된 할일 목록
var doneList = todolist.filter(function(){});
console.log('filter() 완료된 할일 목록', doneList);

// map() 남은 할일 목록
var reaminList = todolist.map(function(){});
console.log('map() 남은 할일 목록', reaminList);

// reduce() 남은 할일 수
var reaminCount = todolist.reduce(function(){});
console.log('reduce() 남은 할일 수', reaminCount);

// find() _id=2인 할일
var todo = todolist.find(function(){});
console.log('find() _id=2인 할일', todo);

// find() _id=3인 할일의 index
var todoIndex = todolist.find(function(){});
console.log('find() _id=3인 할일의 index', todoIndex);

// some() 남은 할일이 하나라도 있는가?
var hasTodo = todolist.some(function(){});
console.log('some() 남은 할일이 하나라도 있는가?', hasTodo);

// every() 할일이 모두 완료 되었는가?
var busy = todolist.every(function(){});
console.log('every() 할일이 모두 완료 되었는가?', busy);
