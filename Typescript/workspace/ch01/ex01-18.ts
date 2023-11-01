(()=>{
  function getSchedule(subject: string): string | undefined {
    if('Javascript' == subject){
      return `Javascript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    }else if('TypeScript' === subject){
      return `Typescript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsSchedule = getSchedule('Javascript');
  const tsSchedule = getSchedule('Typescript');

  console.log(jsSchedule);
  console.log(tsSchedule);
})();

