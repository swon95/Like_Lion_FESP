(()=>{
    console.log(typeof 10);
    console.log(typeof 'hello');
    console.log(typeof false);
    console.log(typeof new Function());
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof new Date());
  
    function print(msg: string | number){
      if(typeof msg === 'string'){
        console.log(msg.length);
      }else if(typeof msg === 'number'){
        console.log(msg.toFixed(2));
      }    
    }
  
    print('hello');
    print(3.141592);
  })();