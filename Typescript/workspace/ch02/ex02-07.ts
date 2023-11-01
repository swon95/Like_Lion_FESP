(()=>{
    function echoString(msg: string): string{
      return msg;
    }
  
    function echoNumber(msg: number): number{
      return msg;
    }
  
    const result1: string = echoString('hello');
    console.log(result1.substring(1, 3));
  
    const result2: number = echoNumber(3.141592);
    console.log(result2.toFixed(2));
  
  })();
  