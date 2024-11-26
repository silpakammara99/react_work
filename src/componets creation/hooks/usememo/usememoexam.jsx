import { useMemo, useState } from "react";

const UseMemoExam = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1000);

  const setAgeHandler = () => {
    // console.log("age is change");
    setAge(age + 1);
  };

  const setSalaryHandler = () => {
    // console.log("salary is change");
    setSalary(salary + 1000);
  };

  const ageEvenChecker = useMemo(() => {
    console.log('event checking')
    if (age % 2 == 0) {
      return "age is even";
    } else return "age is odd";
  },[age])


  
  return (
    <>
      <h1>
        {age}-{ageEvenChecker}
      </h1>
      <h2>{salary}</h2>
      <button onClick={setAgeHandler}>age inc</button>
      <button onClick={setSalaryHandler}>salary incr</button>
    </>
  );
};

export default UseMemoExam;
