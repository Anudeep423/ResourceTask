import React,{useState} from "react"
import { useNavigate } from "react-router-dom"

const LoginComponent = ({setIsLoggedIn,isLoggedIn}) => {

    let navigate = useNavigate();

    const [userDetails,setUserDetails] = useState({
        Phone : "",
        Passoword : ""
    })

    function handleLogin(){ 
      if( userDetails.Phone == "12345" && userDetails.Passoword == "12345" ){
        setIsLoggedIn(true)
        navigate("/")
      }else{
        alert("Invalid crediantials , Phone = 12345 and passowrd = 12345")
      }
    }

    return (
        <div style={{ margin : "50px" }} >
        <h2> Login  </h2>
        <input 
        onChange={ (e) => {
            setUserDetails({ ...userDetails , Phone : e.target.value  })
        } }
        value = {userDetails.Phone}
        placeholder="Enter phone no"
        />
        <br />
        <br />
        <input 
          onChange={ (e) => {
            setUserDetails({ ...userDetails , Passoword : e.target.value  })
        } }
        value = {userDetails.Passoword}
        placeholder="Enter Password"
        />
          <br />
        <br />
        <button onClick={ () => {
            handleLogin()
        } } > Login </button>
        </div>
    )
}

export default LoginComponent;