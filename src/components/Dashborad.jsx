import Github from "./github/github";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Dashboard()
{

    let nav = useNavigate();
    let isAuth = useSelector((state)=>{return state.Loginreducer.isAuth});

    useEffect(()=>{
              
        if(!isAuth)
        {
            nav("/login")
        }

    },[isAuth])


    return (<div><Github/></div>)
}
export default Dashboard