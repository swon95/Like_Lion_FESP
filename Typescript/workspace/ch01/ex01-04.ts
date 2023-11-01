(()=>{
    function user(name: string, age?: number): void{
      console.log(name, age);
    }
    user('김철수', 30);
    user('이영희');
  })();