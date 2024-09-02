import CustomeCards from "./bootstrap"

const FirstComponent=()=>{


    return(
        <>
        
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <CustomeCards title={"john"} text={"John is a software developer"} />
      </div>
      <div className="col-sm-4">
      <CustomeCards title={"soni"} text={"soni is a react developer"}/>
      </div>
      <div className="col-sm-4">
<CustomeCards title={"sree"} text={"sree is a java developer"}/>
      </div>
    </div>
  </div>
</>

        
    )
}

export default FirstComponent