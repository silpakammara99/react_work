const Lists = (prop) => {
  const { list } = prop;
  return (
     <ol>
      <>{
         list.map((each,index)=>{
            return <li key={index}>{each}</li>
         })
      }
      </>
     </ol>
  );
};
export default Lists;


export const Unorder=(props)=>{
   const {data}=props;
   return(
      <ul>
         <>{
            data.map((each,index)=>{
               return <li key={index}>{each}</li>
            })
         }
         </>
      </ul>
   )
}
