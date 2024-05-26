import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Resource({resourceName,tagName}) {


    const [resources,setResources] = useState([]);
    const [filteredItems,setFilteredItems] = useState([]);

    useEffect( () => {

        let resources = []
        axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json")
        .then( (res) => {
            console.log("Api call happend")
            if( tagName == "all" ){
                resources = res.data
            }else if( tagName == "request" ){
              let filterResult =   res.data.filter( (item,i) => {
                    if(item?.tag == "request"){
                        return true
                    }
                })
                console.log(resources);
                resources = filterResult
            }else if(tagName == "user"){
                let filterResult =   res.data.filter( (item,i) => {
                    if(item.tag == "user"){
                        return true
                    }
                })
                resources = filterResult
            }
            setResources(resources  )


        })   
    
    } , [] )

    useEffect( () => {

        let result = resources.filter( (item,i) => {
            if(item.title.toLowerCase().includes( resourceName.toLowerCase()  )  ){
                return true
            }
        })
        setFilteredItems(result);
    } , [resourceName] )


  return (
    <div  id = "resource-wrapper" > 
    { filteredItems.length == 0 && resourceName == "" ? 
      resources.slice(0,6).map( (item,i) => {
     return    <div className='resource-card' >
     <div style={{ display : 'flex'  }} >
         <div>
     <img 
     className='resource-icon'
     src= {item.icon_url}
     />
     </div>
     <div style={{ marginLeft : "20px" }} >
     <h4> {item.title}  </h4>
     <p> {item.category}  </p>
     <p> {item.tag}  </p>
     </div>
     </div>
       <a href= {item.link} > { item.link } </a>  
       <p>  {item.description} </p>
    </div>
    } ) : filteredItems.slice(0,6).map( (item,i) => {
     return    <div className='resource-card' >
     <div style={{ display : 'flex'  }} >
         <div>
     <img 
     className='resource-icon'
     src= {item.icon_url}
     />
     </div>
     <div style={{ marginLeft : "20px" }} >
     <h4> {item.title}  </h4>
     <p> {item.category}  </p>
     <p> {item.tag}  </p>
     </div>
     </div>
       <a href= {item.link} > { item.link } </a>
       <p>  {item.description} </p>
    </div>
    } )  }
 
  </div>
  )
}

export default Resource