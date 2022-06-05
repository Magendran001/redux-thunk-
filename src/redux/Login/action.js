import axios from "axios"
const Loginupdate = (payload) => {

    return { type: "Loginupdate", payload }

}
const Logout = () => {

    return { type: "Logout" }

}

const Loginapipost = (loginobj) => ({ dispatch }) => {


    console.log(loginobj)

    axios.post("https://masai-api-mocker.herokuapp.com/auth/login", { ...loginobj })
        .then((res) => {
            console.log(res);

            if (res.data.token) {
                dispatch(Loginupdate(res.data.token))
            }

        })
        .catch((err) => {
            console.log(err);
            alert("Wrong Credentails")
        })
}

export { Loginupdate, Logout, Loginapipost }