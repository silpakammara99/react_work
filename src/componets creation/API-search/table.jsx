


const CustomTable=({recipes})=>{

     
     return(
    <>
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">S.no</th>
        <th scope="col">Image</th>
        <th scope="col">name</th>
        <th scope="col">instructions</th>
      </tr>
    </thead>
    <tbody>{
    recipes.map((each)=>{
        return(
     <tr key={each.id}>  
     <td>{each.id}</td>
        <td><img src={each.image} height={100} width={100}/></td>
        <td>{each.name}</td>
        <td>{each.instructions}</td>
      </tr>
)
    })
}
      
    </tbody>
  </table>
</>
    )

}

export default CustomTable