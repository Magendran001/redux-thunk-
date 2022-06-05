
import { createStore, combineReducers, applyMiddleware } from "redux";
import Loginreducer from "./Login/loginreducer";
import githubreducer from "./github/githubreducer";


const logger = (store) => (next) => (action) => {




    if (typeof action == "function") {



        return action(store)
    }

    return next(action)

}

const rootreducer = combineReducers({ githubreducer, Loginreducer })
const store = createStore(rootreducer, applyMiddleware(logger));

export default store