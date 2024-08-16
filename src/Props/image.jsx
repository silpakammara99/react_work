

const Image=(prop)=>{

    const{source,width,height}=prop;
    return(
    <img src={source} width={width} height={height}></img>
    )
}

export default Image