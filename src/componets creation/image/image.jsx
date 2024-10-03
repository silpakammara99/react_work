

const CustomImage=(props)=>{
const{source, alternaterText, width, height}=props;

    return(
        <img src={source} alt="alternateText" width={width} height={height}/>
    )
}

export default CustomImage