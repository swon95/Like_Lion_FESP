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
for (let i = 0; i < todolist.length; i += 1) {
  if (todolist[i].done === true) {
    doneList[doneList.length] = todolist[i];
  }
}
console.log("완료된 할일 목록", doneList);

// 남은 할일 목록
var reaminList = [];
for (let i = 0; i < todolist.length; i += 1) {
  if (todolist[i].done === false) {
    reaminList[reaminList.length] = todolist[i];
  }
}
console.log("남은 할일 목록", reaminList);

// 남은 할일 수
var reaminCount = 0;
reaminCount = reaminList.length;
console.log("남은 할일 수", reaminCount);

// _id=2인 할일
var todo = {};
for (let i = 0; i < todolist.length; i += 2) {
  if (todolist[i]._id === 2) {
    todo = todolist[i].title;
  }
}
console.log("_id=2인 할일", todo);

// _id=3인 할일의 index
var todoIndex = 0;
for (let i = 0; i < todolist.length; i += 1) {
  if (todolist[i]._id === 3) {
    todoIndex = i;
  }
}
console.log("_id=3인 할일의 index", todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = false;
for (let i = 0; i < todolist.length; i += 1) {
  if (todolist[i].done === false) {
    hasTodo = true;
    break;
  }
}
console.log("남은 할일이 하나라도 있는가?", hasTodo);

// 할일이 모두 완료 되었는가?
var busy = true;
for (let i = 0; i < todolist.length; i += 1) {
  if (todolist[i].done === false) {
    busy = "Nope! keep going!";
    break;
  }
}
console.log("할일이 모두 완료 되었는가?", busy);