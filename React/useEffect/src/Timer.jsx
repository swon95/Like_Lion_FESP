import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(10); // 초기 시간 10초로 설정
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(10); // 타이머를 10초로 재설정
    };

    const handleButtonClick = () => {
        if (time === 0) {
            stopTimer();
            alert("타이머가 종료되었습니다.");
        } else if (isRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    useEffect(() => {
        if (time === 0) {
            stopTimer();
            alert("타이머가 종료되었습니다.");
            startTimer();
        }
    }, [time]);

    return (
        <div>
            <p>남은 시간: {time}초</p>
            <button onClick={handleButtonClick}>
                {time === 0 ? "시작" : isRunning ? "정지" : "시작"}
            </button>
            <button onClick={resetTimer}>리셋</button>
        </div>
    );
}

export default Timer;
