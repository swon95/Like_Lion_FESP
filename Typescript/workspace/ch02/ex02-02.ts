// ex02-01.js 복사
(()=>{

    interface IHighSchool {
      kor: number;
      eng: number;
      sum(): number;
      avg(): number
    }
  
    class HighSchool implements IHighSchool{
      // 1. 멤버변수 타입을 정의
      // 2. 생성자 메서드의 매개 변수와 리턴 타입을 정의
      public kor: number;
      eng: number;
      constructor(kor: number, eng: number){
        this.kor = kor;
        this.eng = eng;
      }
      sum(): number{
        return this.kor + this.eng;
      }
      avg(): number{
        // 평균은 소수 첫째 자리에서 반올림
        return Math.round(this.sum() / 2);
      }
    }
  
    var s1 = new HighSchool(100, 91);
    console.log('평균', s1.avg());
  
    // 잘못된 사용
    s1.eng = 99;
    console.log('평균', s1.sum() / 2);
  })();