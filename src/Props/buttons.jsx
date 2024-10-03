


const Buttons=(props)=>{
const{text="click", bgColor="violet", onPress=()=>{}}=props;

    return(
    <button style={{backgroundColor:bgColor, width:100, height:40}} onClick={onPress}>{text}</button>
)
}
export default Buttons