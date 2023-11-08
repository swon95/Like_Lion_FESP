import React, { MutableRefObject, useEffect, useRef } from "react";
import MyInput from "./MyInput";
import "./App.css";

function App(): Element {
    const inputRef = useRef();

    useEffect((): void => {
        console.log(inputRef);
        // 렌더링 시 useRef 를 통해 input DOM 요소에 접근
        inputRef.current.focus();
    }, []);

    const login = (): void => {
        console.log(inputRef.current.value);
        alert(`${inputRef.current.value} 님 환영합니다.`);
        inputRef.current.focus();
    };
    return (
        <div>
            {/* forwardRef 와 동일한 기능을 가짐 */}
            {/* <input ref={inputRef} type="text" placeholder="username" /> */}
            {/* 자식요소로 불러온 MyInput == forwardRef */}
            <MyInput ref={inputRef} />
            <button onClick={login}>로그인</button>
        </div>
    );
}

export default App;

// 1. 값이 변하지만, 리렌더링 시키면 안되는 경우엔 useRef 를 사용한다.
// 2. 컴포넌트 내 특정 DOM 요소에 접근해야 하는 경우, Element ref 속성에 refObject 를 넣는다.
// <Element ref={refObject}>
// 3. 컴포넌트의 자식 컴포넌트에게 접근해야하는 경우(fowardRef)
// 자식 컴포넌트에 forwardRef 로 감싸고, ref 속성으로 컴포넌트에게 전달하여 사용한다.
