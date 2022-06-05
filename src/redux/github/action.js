import axios from "axios";
const githubdatastore = "githubdatastore";
const githubdatastorerequest = "githubdatastorerequest"
const githubdatastoresuccess = "githubdatastoresuccess";



const Githubdatastore = (payload) => {


    return { type: githubdatastore, payload }
}

const Githubfetch = () => ({ dispatch }) => {
    console.log("yes")

    dispatch(Githubdatastorerequest())
    axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res.data, "res");


            dispatch(Githubdatastore(res.data))

            dispatch(Githubdatastoresuccess())



        }

        )

        .catch((er) => { console.log(er) })
}


const Githubdatastorerequest = () => {

    return { type: githubdatastorerequest }
}

const Githubdatastoresuccess = () => {

    return { type: githubdatastoresuccess }
}






export { Githubdatastore, Githubdatastorerequest, Githubdatastoresuccess, Githubfetch }