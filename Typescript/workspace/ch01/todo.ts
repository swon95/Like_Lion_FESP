
((): void =>{
    // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언
  
  
    // eslint-disable-next-line prefer-const
    let todoItems: Todo[];
  
    // api
    function fetchTodoItems(): Todo[] {
      const todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
      ];
      return todos;
    }
    
    // TODO: Todo Type 지정
    type Todo = {
      id: number;
      title: string;
      done: boolean;
    };
   
    // crud methods
    function fetchTodos(): Todo[] {
      const todos = fetchTodoItems();
      return todos;
    }
    
    function addTodo(todo: Todo): void {
      todoItems.push(todo);
    }
    
    function deleteTodo(index: number): void {
      todoItems.splice(index, 1);
    }
    
    function completeTodo(index: number, todo: Todo): void {
      todo.done = true;
      todoItems.splice(index, 1, todo);
    }
    
    // business logic
    function logFirstTodo(): Todo {
      return todoItems[0];
    }
    
    function showCompleted(): Todo[] {
      return todoItems.filter(item => item.done);
    }
    
    function addTwoTodoItems(): void {
      // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
      addTodo({ id: 4, title: '자바스크립트', done: false });
      addTodo({ id: 5, title: '화이팅!', done: false },);
  
      const first = logFirstTodo();
      console.log(first);
  
      deleteTodo(4);
      completeTodo(3, todoItems[3]);
  
      const result = showCompleted();
      console.log(result);
  
    }
    
    // 1. Todo 목록을 가져온다.
    todoItems = fetchTodos();
    // 2. 2개의 Todo를 등록한다.
    addTwoTodoItems();
    
    console.log(todoItems);
    
  })();
  
  