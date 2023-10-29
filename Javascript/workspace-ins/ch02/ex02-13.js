function fn(n1, n2){
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for(var i=0; i<arguments.length; i++){
    sum += arguments[i];
  }
  console.log('합계', sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(234,234,324,52345,23,4634,57,56,7,34,523,45,256,43,45,642345,2345,23,46,245,6,24536,24,56,45);