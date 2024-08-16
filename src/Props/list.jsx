


const Lists=(prop)=>{
    const{list}=prop; 

 <ol>
    <>
    {
   list.map(each=>{
<li>{each}</li>
   })
    
    }
    </>

      </ol>
}
export default Lists
