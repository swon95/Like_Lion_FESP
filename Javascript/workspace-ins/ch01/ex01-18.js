var arr = [1,2,3,4,5,6,7,8,9,10];
var sum = arr.reduce(function(acc, curr){
  return acc + curr;
}, 100);

console.log(sum);