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
