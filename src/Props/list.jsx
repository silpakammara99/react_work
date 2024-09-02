const Lists = (prop) => {
  const { list } = prop;
  return (
     <h6><ol>
      <>{
         list.map((each,index)=>{
            return <li key={index}>{each}</li>
         })
      }
      </>
     </ol></h6>
  );
};
export default Lists;
