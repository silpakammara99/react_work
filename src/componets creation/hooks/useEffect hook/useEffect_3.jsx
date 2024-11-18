import { useEffect, useRef, useState } from "react";

export const UseEffectExample3 = () => {
  const [salary, setSalary] = useState(10000);
  const salaryRef = useRef(0);

  useEffect(() => {
    console.log("useeffect trigeer");
    salaryRef.current = salary;
  }, [salary]);

  const salaryHandler = () => {
    setSalary(salary + 1000);
  };

  return (
    <>
      <h3>useState {salary}</h3>
      <h4>previous state useRef {salaryRef.current}</h4>
      <button onClick={salaryHandler}>click</button>
    </>
  );
};
