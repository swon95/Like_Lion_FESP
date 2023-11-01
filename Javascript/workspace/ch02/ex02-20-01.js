var todolist = [
    {
        _id: 1,
        title: "Javascript 공부",
        done: true,
    },
    {
        _id: 2,
        title: "Typescript 공부",
        done: false,
    },
    {
        _id: 3,
        title: "React 공부",
        done: false,
    },
    {
        _id: 4,
        title: "React 프로젝트",
        done: true,
    },
];

// forEach() 완료된 할일 목록
var doneList = [];
// 배열 순회
todolist.forEach(function (todo) {
    if (todo.done) {
        doneList.push(todo); // done 이 true 인 요소만 배열에 추가
    }
});
console.log("forEach() 완료된 할일 목록", doneList);

// filter() 완료된 할일 목록
var doneListFiltered = todolist.filter(function (todo) {
    return todo.done; // todo.done 이 true 인 항목만 반환
});
console.log("filter() 완료된 할일 목록", doneListFiltered);

// map() 남은 할일 목록
var reaminList = todolist.map(function (todo) {
    return todo.title; // 각 todo 의 title 속성만을 새로운 배열로 반환
});
console.log("map() 남은 할일 목록", reaminList);

// reduce() 남은 할일 수
// 누적 값 계산
var reaminCount = todolist.reduce(function (count, todo) {
    return todo.done ? count : count + 1; // todo.done이 false인 항목의 수를 +
}, 0);
console.log("reduce() 남은 할일 수", reaminCount);

// find() _id=2인 할일
var todo = todolist.find(function (todo) {
    return todo._id === 2;
});
console.log("find() _id=2인 할일", todo);

// findIndex() _id=3인 할일의 index
var todoIndex = todolist.findIndex(function (todo) {
    return todo._id === 3;
});
console.log("findIndex() _id=3인 할일의 index", todoIndex);

// some() 남은 할일이 하나라도 있는가?
// some => true or false, 하나라도 만족시 == true
var hasTodo = todolist.some(function (todo) {
    return !todo.done; // 하나 이상의 todo.done이 false인지 확인
});
console.log("some() 남은 할일이 하나라도 있는가?", hasTodo);

// every() 할일이 모두 완료 되었는가?
// some => 모든 조건 만족 시 true, 하나라도 만족 x == false
var busy = todolist.every(function (todo) {
    return todo.done;
});
console.log("every() 할일이 모두 완료 되었는가?", busy);
