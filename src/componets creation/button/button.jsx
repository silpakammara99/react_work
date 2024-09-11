


const CustomButton =(prop)=>{
    const {text="button",onPress=()=>{},bgColor="green"}=prop
    const buttonText="Click me" 

    const myPress=()=>{
        onPress({name:"John",salary:10000})

    }

    const buttonStyles={backgroundColor:"red",color:"white"}
    return(
        <button style={buttonStyles}  onClick={myPress} >{text}</button>
    )
}

export default CustomButton