// ex02-05/math.js 복사
export interface Data {
    a: number;
    b: number;
  }
  export function sum(data: Data): number {
    return data.a + data.b;
  }
  
  export function substract(data: Data){
    return data.a - data.b;
  }
  
  function divide(data: Data){
    return data.a / data.b;
  }
  
  export default {sum, substract, divide};