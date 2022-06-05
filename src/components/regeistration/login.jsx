import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Loginupdate ,Loginapipost} from "../../redux/Login/action";

function Login()
{

    let isAuth = useSelector((state)=>{return state.Loginreducer.isAuth});
    let nav = useNavigate();
    
    console.log(isAuth,"isauth")

    let dispatch = useDispatch();
 let [loginobj,setloginobj] = useState({})

   const changehandle =(target)=>{

    let {value,name} = target;
    setloginobj({...loginobj,[name]:value});
   
        
   }

   useEffect(()=>{
 
       if(isAuth)
       {
         nav("/")
       }
        

   },[isAuth])

 const Loginpost =()=>{
   
 
   dispatch(Loginapipost(loginobj))
    
 }


    return (<div>
          
        <input type="text" name="username" placeholder="username" onChange={(e)=>{changehandle(e.target)}} />
        <input type="text" name="password" placeholder="password" onChange={(e)=>{changehandle(e.target)}} />
       
        <button onClick={Loginpost}>Submit</button>
        
    </div>)
}
export default Login