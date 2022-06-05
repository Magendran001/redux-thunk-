const init = { isAuth: !JSON.parse(localStorage.getItem("userdetails")) ? false : true }
const Loginreducer = (state = init, { type, payload }) => {

    switch (type) {
        case "Loginupdate": {
            localStorage.setItem("userdetails", JSON.stringify(payload))

            return { ...state, isAuth: true }

        }

        case "Logout": {
            localStorage.setItem("userdetails", JSON.stringify(false))
            return { ...state, isAuth: false }
        }

        default: {
            return { ...state }
        }
    }

}

export default Loginreducer