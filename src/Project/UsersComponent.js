import React,{useState} from 'react'
import Resource from './Resource'
import ResourceInput from "./ResourceInput"

function UsersComponent() {
  
  const [resourceName,setResourceName] = useState("");
  return (
    <>
  
    <div id = "resource-section" >
    <ResourceInput 
    resourceName = {resourceName}
    setResourceName = {setResourceName}
    />
    <Resource 
    resourceName= {resourceName}
    setResourceName = {setResourceName}
    tagName = "user"
    />
    </div>
    </>
  )
}

export default UsersComponent