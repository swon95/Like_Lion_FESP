(()=>{
    function echo<T>(msg: T): T{
      return msg;
    }
  
    const result1: string = echo<string>('hello');
    console.log(result1.substring(1, 3));
  
    const result2: number = echo<number>(3.141592);
    console.log(result2.toFixed(2));
  })();
  