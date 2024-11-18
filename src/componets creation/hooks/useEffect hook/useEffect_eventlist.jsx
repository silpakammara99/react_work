import { useEffect, useState } from "react";

export const UseEffectExample2 = () => {
  const [position, setPosition] = useState({
    xPosition: 0,
    yPosition: 0,
  });

  const mouseMoveTracker = (event) => {
    console.log(event);
    const { clientX, clientY } = event;
    setPosition({
      xPosition: clientX,
      yPosition: clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveTracker);
    return () => {
      window.removeEventListener("mousemove", mouseMoveTracker);
    };
  }, []); // Dependency array ensures the effect runs only on mount/unmount

  return (
    <>
      <h1>useEffect Event Listeners</h1>
      <h3>x-position-{position.xPosition}</h3>
      <h3>Y-position-{position.yPosition}</h3>
    </>
  );
};
