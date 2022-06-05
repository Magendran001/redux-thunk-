import { useState } from "react";
import axios from "axios";
import { useEffect } from "react"

function Regeister()
{

    

    let [postobj,Setpostobj] = useState({});
    let [input,setinput] = useState({});

    
 useEffect(()=>{
      

 },[])


 

 const Changehandle =(target)=>{

    let {name,value} = target;

    Setpostobj({...postobj,[name]:value})

 }
 const Postdata =(e)=>{

    e.preventDefault();

    console.log(postobj,"postdata")


    axios.post("https://masai-api-mocker.herokuapp.com/auth/register", {
        ...postobj
       
      })
      .then(function (response) {
        console.log(response);

        if(response.data.message)
        {
            alert("StatusCode:"+response.status+" "+response.data.message)
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error 404 on server side")
      });

    }

    return (<>
    <form onSubmit={Postdata}>
     <input type="text"name="name" placeholder="name" onChange={(e)=>{Changehandle(e.target)}} />
     <input type="text"name="email" placeholder="email" onChange={(e)=>{Changehandle(e.target)}} />
     <input type="text"name="password" placeholder="password" onChange={(e)=>{Changehandle(e.target)}} />
     <input type="text"name="username" placeholder="username"onChange={(e)=>{Changehandle(e.target)}} />
     <input type="number"name="mobile" placeholder="mobile" onChange={(e)=>{Changehandle(e.target)}} />
     <input type="text"name="description" placeholder="description" onChange={(e)=>{Changehandle(e.target)}} />
       <input type="submit" name="" id="" />
       </form>
    </>)
}
export default Regeister