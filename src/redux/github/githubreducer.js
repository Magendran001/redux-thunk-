
const githubdatastorerequest = "githubdatastorerequest"
const githubdatastoresuccess = "githubdatastoresuccess"
const githubdatastore = "githubdatastore";

const init = { Githubdata: [], isLoading: false };

const githubreducer = (state = init, { type, payload }) => {

    switch (type) {
        case githubdatastore: {
            return { ...state, Githubdata: payload, isLoading: false }
        }
        case githubdatastorerequest: {

            return { ...state, isLoading: true }
        }

        case githubdatastoresuccess: {

            return { ...state, isLoading: false }
        }

        default: {
            return { ...state }
        }
    }

}
export default githubreducer