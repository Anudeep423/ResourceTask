import React,{useState} from 'react'
import { BrowserRouter , Routes,Route , Link } from 'react-router-dom'
import Home from './Home'
import Header from "./Header"
import RequestComponent from './RequestComponent'
import UsersComponent from './UsersComponent'
import AddItem from "./AddItem";
import LoginComponent from "./LoginComponent"
import TagNavigationButtons from "./TagNavigationButtons"

function App() {
    const [isLoggedIn,setIsLoggedIn] = useState(false); 
    const [activeBtn,setActiveBtn] = useState(1)


  return (
    <>
    <BrowserRouter>
    <Header 
    isLoggedIn = {isLoggedIn} 
    setIsLoggedIn = {setIsLoggedIn}
    />
    
      <TagNavigationButtons
      activeBtn = {activeBtn}
      setActiveBtn = {setActiveBtn}
      />



    <Routes>
        <Route path='/' element = { <Home 
        />} />
        <Route path='/request' element = { <RequestComponent 
        />  } />
          <Route path='/users' element = { <UsersComponent 
        />  } />
        <Route 
        path='/addItem'
        element = { <AddItem
          isLoggedIn = {isLoggedIn} 
          setIsLoggedIn = {setIsLoggedIn}
          /> }
        />
        <Route 
        path='/login'
        element = { <LoginComponent 
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
        /> } 
        />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App