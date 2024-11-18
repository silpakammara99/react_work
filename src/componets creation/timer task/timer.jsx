import React, { useState, useEffect } from "react";

export const Stopwatch = () => {
    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false); // Stopwatch running status

    useEffect(() => {
        let timerId;

        if (isRunning) {
            timerId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000); // Increment time every second
        }

        // Cleanup the interval on stop or unmount
        return () => clearInterval(timerId);
    }, [isRunning]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const pad = (num) => String(num).padStart(2, "0"); // Add leading zeros

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    const handleStartStop = () => {
        setIsRunning((prev) => !prev); // Toggle the running status
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0); // Reset time to 0
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Stopwatch</h1>
            <h2>{formatTime(time)}</h2>
            <button onClick={handleStartStop}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset} style={{ marginLeft: "10px" }}>
                Reset
            </button>
        </div>
    );
};
