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

// 완료된 할일 목록
var doneList = [];
for (var i = 0; i < todolist.length; i++) {
    if (todolist[i].done) {
        doneList.push(todolist[i]);
    }
}
console.log("완료된 할일 목록", doneList);

// 남은 할일 목록
var reaminList = [];
for (var i = 0; i < todolist.length; i++) {
    if (!todolist[i].done) {
        reaminList.push(todolist[i]);
    }
}
console.log("남은 할일 목록", reaminList);

// 남은 할일 수
var reaminCount = 0;
for (var i = 0; i < todolist.length; i++) {
    if (!todolist[i].done) {
        reaminCount++;
    }
}
console.log("남은 할일 수", reaminCount);

// _id=2인 할일
var todo = {};
for (var i = 0; i < todolist.length; i++) {
    if (todolist[i]._id === 2) {
        todo = todolist[i];
        break; // _id=2 인 todo 를 찾으면 루프 종료
    }
}
console.log("_id=2인 할일", todo);

// _id=3인 할일의 index
var todoIndex = 0;
for (var i = 0; i < todolist.length; i++) {
    if (todolist[i]._id === 3) {
        todoIndex = i;
        break; // _id=3 인 todo 의 인덱스를 찾으면 루프 종료
    }
}
console.log("_id=3인 할일의 index", todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = false;
for (var i = 0; i < todolist.length; i++) {
    if (!todolist[i].done) {
        hasTodo = true;
        break; // 남은 todo 를 찾으면 루프 종료
    }
}
console.log("남은 할일이 하나라도 있는가?", hasTodo);

// 할일이 모두 완료 되었는가?
var busy = true;
for (var i = 0; i < todolist.length; i++) {
    if (!todolist[i].done) {
        busy = false;
        break; // false 인 todo 를 찾으면 루프 종료
    }
}
console.log("할일이 모두 완료 되었는가?", busy);
