// 인터페이스 상속
(function(){
    interface Todo {
      title: string;
      content: string;
    }
  
    interface TodoInfo extends Todo {
      // title: string;
      // content: string;
      readonly _id: number;
      done?: boolean
    }
  
    var todo1: Todo = {
      title: '할일1',
      content: '등록할 때 사용'
    };
  
    var todo2: TodoInfo = {
      _id: 2, 
      title: '할일2',
      content: '상세 조회에 사용'
    };
  
    console.log(todo1, todo2);
  })();
  
  