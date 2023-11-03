(()=>{
    const kim: User = {
      name: '김철수',
      age: 30,
      nickname: '철수'
    };
  
    const lee: UnknownUser = {
      name: '이영희',
      age: '비공개'
    };
  
    const hong: AdminUser = {
      name: '홍길동'
    };
  
    function printUser(user: User | UnknownUser | AdminUser){
      // User 타입일 경우 나이 출력
      if('age' in user && typeof user.age === 'number'){
        console.log((user as User).nickname);
      }
    }
  
    printUser(kim);
    printUser(lee);
    printUser(hong);
  })();