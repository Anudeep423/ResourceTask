import React from "react"
import { useNavigate } from "react-router-dom"

function RenderLoginButton({setIsLoggedIn,isLoggedIn}){ 
    let navigate = useNavigate();
    if(isLoggedIn == true){
      return <button className='btn btn-danger' onClick={ () => { setIsLoggedIn(false) } } > Logout </button>
    }else{
      return <button 
      type="button" className = "btn btn-primary"
      onClick={ () => {
        navigate("/login")
      } } > Login </button>
    }
  }

  export default RenderLoginButton;