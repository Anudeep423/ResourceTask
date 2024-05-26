import React from 'react'
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom"


function TagNavigationButtons({activeBtn,setActiveBtn}) {

  let location = useLocation();
  console.log(location);

  return (
    <> { location.pathname == "/" || location.pathname == "/request" || location.pathname == "/users" ?  
    <div style={{ textAlign : "center" , marginTop : "50px" }} >
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <div
    onClick={ () => {
      console.log("Clicked")
      setActiveBtn(1)
    } }  >
<Link to = "/" >
<input type="radio" class= {`btn-check`}  id="btnradio1"  />
<label class={`btn btn-outline-primary ${activeBtn == 1 ?`btn-primary` : ""}`} for="btnradio1"> Resources </label>
</Link> 
</div>
<div   onClick={ () => {
console.log("Clicked")
setActiveBtn(2)
} }>
<Link to = "/request" >
<input type="radio"
className = {`btn-check`}  id="btnradio2"  />
<label class={`btn btn-outline-primary ${activeBtn == 2 ?`btn-primary` : ""}`} for="btnradio2"> Requests </label>
</Link>
</div>
<div    onClick={ () => {
  setActiveBtn(3)
} }>
<Link  to = "/users" >
<input 
type="radio" class={`btn-check`}  id="btnradio3"  />
<label class={`btn btn-outline-primary ${activeBtn == 3 ?`btn-primary` : ""}`} for="btnradio3"> Users </label>
</Link>
</div>
</div>
     <br />
     </div> 
    : "" }
   
     </>
  )
}

export default TagNavigationButtons