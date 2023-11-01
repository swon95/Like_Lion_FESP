(()=>{
    function getCount(count: number): string{
      return 'Count: ' + count;
    }
    getCount(10);
    // getCount('20');
    // getCount(10, 20);
    // getCount();
    var number: string = getCount(30);
    console.log(number);
  })();