import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import Githubmap from "./githubmap";
import { Githubdatastore ,Githubdatastorerequest,Githubdatastoresuccess,Githubfetch} from "../../redux/github/action";
import { useEffect } from "react";


function Github()
{
    let dispatch = useDispatch();

    let githubdata = useSelector((state)=>{ return state.githubreducer.Githubdata});
    let isloading = useSelector((state)=>{ return state.githubreducer.isLoading});
    let isAuth = useSelector((state)=>{return state.Loginreducer.isAuth});
    console.log(githubdata,"githubdaats")
    
   

    useEffect(()=>{
       dispatch( Githubfetch())
    },[])
    return (<div>
         <div>{isAuth?isloading?"....loading please wait for max 20sec":<Githubmap />:"Kindly login first"}</div>
        </div>)
}
export default Github;



