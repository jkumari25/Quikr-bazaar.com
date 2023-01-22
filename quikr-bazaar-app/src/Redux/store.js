import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./ProductReducer/reducer";
import {Reducer as AdminLoginReducer} from ".././Redux/AdminRedux/reducer"
import { singleProductReducer } from "./ProductDetails/singleProductReducer";
import { reducer as  cartReducer} from "./cart/reducer";


const rootReducer = combineReducers({
    reducer,
    cartReducer,
    AdminLoginReducer,
    singleProductManager : singleProductReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export { store };

