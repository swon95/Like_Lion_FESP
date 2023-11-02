(()=>{
    function echo<T extends string | number>(msg: T): T{
      return msg;
    }
  
    console.log(echo('hello'));
    console.log(echo(100));
    console.log(echo(new Date()));
  })();
  
  