(()=>{
    interface Todo {
      _id: number;
      title: string;
    }
  
    type MyPartial<T> = {
      // _id?: number;
      // title?: string;
  
      // [P in '_id' | 'title']?: Todo[P]
      
      // [P in keyof Todo]?: Todo[P]
  
      [P in keyof T]?: T[P]
    };
  
    const todo1: Todo = {
      _id: 1,
      title: '할일 1'
    };
  
    const todo2: MyPartial<Todo> = {
      title: '할일 2'
    };
  
    const todo3: Partial<Todo> = {
      title: '할일 3'
    };
  
    console.log(todo1, todo2, todo3);
  })();