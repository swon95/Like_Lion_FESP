// ex) useEffcet case

// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App(): Element {
//     const [count, setCount] = useState(0);
//     const [renderCount, setRenderCount] = useState(1);

//     // 무한 루프
//     useEffect((): void => {
//         console.log("렌더링! ");
//         // useEffcet 훅 내부에서, State 를 강제로 변경하면 App 함수는 재 렌더링됨
//         setRenderCount(renderCount + 1);
//     });
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={(): void => setCount(count + 1)}>증가</button>
//         </div>
//     );
// }

// export default App;

// ----------------------------------------------------------------------------------------
// ex) useRef case

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App(): Element {
    const [count, setCount] = useState(0);
    const renderCount = useRef(1);

    // 무한 루프
    useEffect((): void => {
        console.log("렌더링! ", renderCount.current);
        // Ref 는 렌더링에 영향이 없기 때문에, 값은 유지하되 State 는 변경하고 재 랜더링 x
        renderCount.current = renderCount.current + 1;
    });
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={(): void => setCount(count + 1)}>증가</button>
        </div>
    );
}

export default App;
