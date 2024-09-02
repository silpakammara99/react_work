import {DNA} from "react-loader-spinner"


const CustomDNALoader=(props)=>{
    return(
        <DNA
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        height={"200"}
        {...props}
  
        /> 
    )
}
export default CustomDNALoader