var count = 0;
var counter = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; // this = counter
    var visit2 = function(){
      this.count++; // this = window
    }
    visit2();
	}
};

counter.visit();
counter.visit();
console.log('합계', counter.count, count);
