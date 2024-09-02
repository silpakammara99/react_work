import { InfinitySpin } from "react-loader-spinner"



const InfiniteLoader=(props)=>{
    return(
        <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
        {...props}
        />   
    )
}
export default InfiniteLoader