
 import Login from "../regeistration/login"
 import Regeister from "../regeistration/regeistration";
 import Github from "../github/github";
 import { useSelector } from "react-redux";
 import Dashboard from "../Dashborad";
 import {Link} from "react-router-dom"

function Navbar()
{
    let isAuth = useSelector((state)=>{return state.Loginreducer.isAuth});
    return (<div style={{display:"flex", width:"80%" ,margin:"auto",justifyContent:"space-between"}}>
         <div><Link to="/">Dashboard</Link></div>
         <div>{isAuth?<><Link to="logout">Logout</Link></>:<Link to="/login">Login</Link>}</div>
        
         <Link to="/register">Register</Link>
        
         
    </div>)
}
export default Navbar