import { createStore, combineReducers, applyMiddleware, compose } from "redux";
/**
 * thunk is a middleware which makes asyncronous call
 * why need: redux dispatch is synchronous normally
 * , so make async
 * Use: use it inside applyMiddleare of redux
 */
import thunk from "redux-thunk";

// import all reducers in store
import user from "./reducers/userReducer";

// create your store and get all reducers inside
const store = createStore(
    combineReducers({
        user // reducer should be import also as user
    }),
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    )
);

export default store;