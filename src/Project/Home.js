import React,{useEffect,useState} from 'react'
import "./App.css"
import axios, { Axios } from 'axios'
import Resource from './Resource';
import ResourceInput from './ResourceInput';

function Home() {

  const [resourceName,setResourceName] = useState("");

  return (
    <div>
       
         <div id = "resource-section" >
         <ResourceInput 
        resourceName = {resourceName}
        setResourceName = {setResourceName}
        />
         <Resource
         resourceName = {resourceName}
         tagName = "all"
         
         />
         </div>
    </div>
  )
}

export default Home