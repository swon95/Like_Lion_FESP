// ex02-01.js 복사
(() => {
    class HighSchool {
        #kor;
        #eng;
        constructor(kor, eng) {
            this.#kor = kor;
            this.#eng = eng;
        }
        #sum() {
            return this.#kor + this.#eng;
        }
        avg() {
            // 평균은 소수 첫째 자리에서 반올림
            return Math.round(this.#sum() / 2);
        }
    }
    var s1 = new HighSchool(100, 91);
    console.log("평균", s1.avg());

    // 잘못된 사용
    s1.eng = 99;
    s1["#eng"] = 99;
    console.dir(s1);

    console.log("평균", s1.sum() / 2);
})();
