(()=>{
    function add10(num){
      // return num + 10;
      return num + 10;
    }
  
    function add20(num = 10){
      return num + 20;
    }
  
    const result1 = add10('100');
    const result2 = add20();
  
    function fn(x: number){
      let y: any;
      // y = 100;
      if(x === 10){
        return 'x는 10';
      }else if(x === 20){
        return 20;
      }else if(x === 30){
        return 30;
      }else{
        return y;
      }
    }
  
    const result3 = fn(10);
    const result4 = fn(20);
    const result5 = fn(30);
  
    interface A {
      a: string;
      b: 'hello';
      c: 'world';
    }
  
    const a: A = {
      a: 'bye',
      b: 'hello',
      c: 'world'
    }
  })();
  