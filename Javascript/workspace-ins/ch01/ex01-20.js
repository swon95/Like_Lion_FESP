var user = {
  userName: '김철수',
  age: 30,
  phone: '0102223333',
  address: '서울특별시 종로구 종로3길 17 D타워, 16-17층 (주)멋쟁이사자처럼'
};

/* 다음처럼 출력할 수 있도록 info를 작성하시오.
김철수님의 정보입니다.
나이: 30
전화번호: 0102223333
주소: 서울시
*/
var info = user.userName + '님의 정보입니다.\n나이: ' + user.age + '\n전화번호: ' + user.phone + '\n주소: ' + user.address;
var info = `${user.userName}님의 정보입니다.
나이: ${user.age}
전화번호: ${user.phone}
주소: ${user.address}`;
console.log(info);

// Tagged template literal
function userInfo(strings, userName, age, phone, address){
  console.log(strings);
  console.log(userName);
  console.log(age);
  console.log(phone);
  console.log(address);

  if(age >= 19 && age <= 34){
    age = '청년';
  }
  address = address.split(' ')[0];
  let first = phone.slice(0, phone.length-4);
  phone = first.padEnd(phone.length, 'X');

  return strings[0] + userName + strings[1] + age + strings[2] + phone + strings[3] + address + strings[4];
}

var kim = userInfo`
  ${user.userName}님의 정보입니다.
  나이: ${user.age}
  전화번호: ${user.phone}
  주소: ${user.address}
`;
console.log(kim);
