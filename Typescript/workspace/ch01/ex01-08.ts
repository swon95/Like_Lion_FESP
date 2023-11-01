// 인터섹션 타입
(()=>{
    type Todo = {
      title: string;
      content: string;
    };
  
    // Todo 타입 확장
    type TodoInfo = Todo & {
      _id: number;
      done: boolean;
    };
  
    var todo1: Todo = {
      title: '할일 1',
      content: '등록할 때 사용.'
    };
  
    var todo2: TodoInfo = {
      _id: 2,
      title: '할일 2',
      content: '상세 조회시 사용.',
      done: true
    };
  
    console.log(todo1, todo2);
  })();