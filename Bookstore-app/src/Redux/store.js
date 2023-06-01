import { combineReducers, legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {Bookreducer} from "./reducers/bookReducer"
import {Userreducer} from "./reducers/userReducer"

let cb = combineReducers({Bookreducer, Userreducer})
const store = createStore(cb,applyMiddleware(thunk))
export {store};