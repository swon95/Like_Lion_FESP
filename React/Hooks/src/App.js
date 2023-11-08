import React, { useState, useRef } from "react";
import "./App.css";

function App(): Element {
    // State 는 값도 변하고, 렌더링도 시킴
    const [count, setCount] = useState(0);
    // Ref 는 값은 변하지만, 렌더링은 시키지 않음
    const countRef = useRef(0);
    // Var 는 일반 변수의 경우 컴포넌트 생애주기와 연관이 있어 초기화 될 수 있지만,
    // Ref 와 유사하게 값은 변하지만 렌더링은 되지 않음
    let countVar = 0;
    console.log("렌더링");

    const increaseCountState = (): void => {
        setCount(count + 1);
    };
    const increaseCountRef = (): void => {
        countRef.current = countRef.current + 1;
        console.log("Ref: ", countRef.current);
    };
    const increaseCountVar = (): void => {
        countVar = countVar + 1;
        console.log("var: ", countVar);
    };
    const printResult = (): void => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
    };
    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={increaseCountState}>상태 +1(렌더링)</button>
            <button onClick={increaseCountRef}>Ref +1</button>
            <button onClick={increaseCountVar}>변수 +1</button>
            <button onClick={printResult}>결과 보기</button>
        </div>
    );
}

export default App;
