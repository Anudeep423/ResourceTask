import React, {useState} from 'react'

function ResourceInput({resourceName,setResourceName}) {
  return ( 
    <input
         value = {resourceName}
         onChange={(e) => {  
            setResourceName(e.target.value)
         } }
         id = "resource-input-field"
         placeholder='Search users' />
  )
}

export default ResourceInput