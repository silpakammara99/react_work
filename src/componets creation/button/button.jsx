import React from "react";

const CustomButton = (prop) => {
  console.log("child re-render", prop.text);
  const { text = "button", onPress = () => {}} = prop;

//   const myPress = () => {
//     onPress({ name: "John", salary: 10000 });
//   };

  const buttonStyles = { backgroundColor: "red", color: "white" };
  return (
    <button style={buttonStyles} onClick={onPress}>
      {text}
    </button>
  );
};

export default React.memo(CustomButton);
