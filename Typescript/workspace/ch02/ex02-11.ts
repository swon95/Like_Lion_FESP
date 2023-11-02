(()=>{
    class Queue {
      data: string[] = [];
      push(item: string): void{
        this.data.push(item);
      }
      pop(): string | undefined{
        return this.data.shift();
      }
    }
  
    var sq = new Queue();
    sq.push('hello');
    sq.push('javascript');
    sq.push('world');
    var s1 = sq.pop();
    var s2 = sq.pop();
    var s3 = sq.pop();
    console.log(s1, s2, s3);
  })();
  
  