
import  React  from 'react';


const Mainheading=(prop)=>{
    const{Mainhead}=prop;
    // console.log(Mainhead,"this is heaidng")
    return(
        <>
        <h1>{Mainhead}</h1>
        </>
    )
    
}
 
export default React.memo(Mainheading)

// export const SubHeading=(prop)=>{
//     const{subhead}=prop;
//     return  <h2>{subhead}</h2>

// }

