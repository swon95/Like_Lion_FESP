var sum = function(x, y){
  return x + y;
}
console.log(sum(10, 20));
console.log(sum(10, 30));
console.log(sum(10, 40));

var sum10 = _.partial(sum, 10);
console.log(sum10(20));
console.log(sum10(30));
console.log(sum10(40));
