(()=>{
    interface Todo {
      title: string,
      content: string;
    }
  
    const todo1: Readonly<Todo> = {
      title: '할일 1',
      content: '내용 1'
    };
  
    // todo1.title = '수정 1';
  
    console.log(todo1);
  })();