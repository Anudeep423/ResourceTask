import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate  } from 'react-router-dom'
import RenderLoginButton from "./RenderLoginButton"

function Header({setIsLoggedIn,isLoggedIn}) {

  let navigate = useNavigate();

  

  return (
    <div id = "admin-header" >
        <Link to = "/" > <img 
         id = "nxtwave-logo"
         src='https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/09/full/20210909132612.jpg'
         /> </Link>
        <div>
        <Link 
        style={{ textDecoration : "none" }}
        to = "/addItem" > <button className='btn btn-success' > Add item </button>  </Link>
        <RenderLoginButton 
        isLoggedIn = {isLoggedIn}
        setIsLoggedIn = {setIsLoggedIn}
        />
        <img 
        className='profile-logo'
        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
        /> 
        </div>
    </div>
  )
}

export default Header