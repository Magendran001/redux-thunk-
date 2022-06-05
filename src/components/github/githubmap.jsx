import { useSelector } from "react-redux";
function Githubmap()
{
    let githubdata = useSelector((state)=>{ return state.githubreducer.Githubdata});
    return (<div>

        {githubdata.map((e)=>{return <div key={e.id}>{e.id}:{e.title}</div>})}
    </div>)
}
export default Githubmap