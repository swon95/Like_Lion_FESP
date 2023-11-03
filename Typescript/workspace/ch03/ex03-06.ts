(()=>{
    type UserFields = 'id' | 'name' | 'address' | 'phone';
  
    type User = {
      [Field in UserFields]: string;
    };
  
    const kim: User = {
      id: 'kim',
      name: '김철수',
      address: '경기도',
      phone: '0102223333'
    };
  
    console.log(kim);
  })();