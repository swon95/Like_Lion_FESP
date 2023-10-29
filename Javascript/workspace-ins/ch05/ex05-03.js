function syncFn1(){
  console.log('syncFn1 작업 시작.');
  // ...
  console.log('syncFn1 작업 종료.');
  return 'syncFn1의 결과물';
}

function syncFn2(f1Result){
  console.log('syncFn2 작업 시작.', f1Result);
  // ...
  console.log('syncFn2 작업 종료.');
  return 'syncFn2의 결과물';
}

// (function(){
//   const result = syncFn1();
//   syncFn2(result);
//   console.log('테스트 종료.');
// })();

function asyncFn1(resolve){
  console.log('asyncFn1 작업 시작.');
  setTimeout(function(){
    // ...
    console.log('asyncFn1 작업 종료.');
    resolve('asyncFn1의 결과물');
  }, 3000);
}

function asyncFn2(f1Result, resolve){
  console.log('asyncFn2 작업 시작.', f1Result);
  setTimeout(function(){
    // ...
    console.log('asyncFn2 작업 종료.');
    resolve('asyncFn2의 결과물');
  }, 2000);
}

// (function(){
//   asyncFn1(function(result){
//     asyncFn2(result, function(f2Result){
//       console.log(f2Result);
//     });
//   });
  
//   console.log('테스트 종료.');
// })();

// ES6 Promise
function promiseFn1(){
  return new Promise(function(resolve, reject){
    console.log('promiseFn1 작업 시작.');
    setTimeout(function(){
      // ...
      console.log('promiseFn1 작업 종료.');
      resolve('promiseFn1의 결과물');
    }, 3000);
  });
}

function promiseFn2(f1Result){
  return new Promise(function(resolve, reject){
    console.log('promiseFn2 작업 시작.', f1Result);
    setTimeout(function(){
      // ...
      console.log('promiseFn2 작업 종료.');
      resolve('promiseFn2의 결과물');
    }, 2000);
  });
}

// Promise ES6 2015
// (function(){
//   promiseFn1()
//     .then(promiseFn2)
//     .then(()=>console.log('작업 종료.'))
//     .catch(err=>console.error(err));
//   console.log('이벤트 처리 완료.');
// })();

// async/await ES2017
async function working(){
  var f1Result = await promiseFn1();
  var f2Result = await promiseFn2(f1Result);
  console.log('작업 처리 완료.', f2Result);
}
(function(){
  working();
  console.log('이벤트 처리 완료.');
})();

