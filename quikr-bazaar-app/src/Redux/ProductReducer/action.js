import axios from "axios";
import * as types from "./actionTypes";

const getProduct= (params) => (dispatch) => {
    dispatch({type: types.GET_PRODUCTS_DATA_REQUEST});

    return axios
    .get("https://database-beta.vercel.app/Mobile", params)
    .then((r) =>{
        dispatch({type: types.GET_PRODUCTS_DATA_SUCCESS, payload: r.data});
    })
    .catch((e) =>{
        dispatch({type: types.GET_PRODUCTS_DATA_ERROR})
    })
}



export { getProduct }