function sum(a, b, c){
  return a + b + c;
}
console.log(sum(10, 20, 30));

var currySum = a => b => c => a + b + c;
console.log(currySum(10)(20)(30));

var myCurry = function(fn){
  return function(a){
    return function(b){
      return function(c){
        return fn(a, b, c);
      };
    };
  };
};

var curryAdd = myCurry(sum);
console.log(curryAdd(1)(2)(3));

// lodash
var currySum = _.curry(sum);
console.log(currySum(2)(3)(4));
console.log(currySum(2, 3)(4));
console.log(currySum(2)(3, 4));
console.log(currySum(2, 3, 4));