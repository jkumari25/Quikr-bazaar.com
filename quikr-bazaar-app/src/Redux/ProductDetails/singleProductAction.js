import axios from "axios";
import * as types from "./singleProductActionTypes";


const getsingleProduct =({id}) => (dispatch) =>{
    dispatch({type: types.GET_PRODUCTS_DETAILS_REQUEST});
    return axios
    .get(`https://database-beta.vercel.app/Mobile/${id}`)
    .then((r) =>{
        dispatch({type: types.GET_PRODUCTS_DETAILS_SUCCESS, payload: r.data});
    })
    .catch((e) =>{
        dispatch({type: types.GET_PRODUCTS_DETAILS_ERROR})
    })
}

export { getsingleProduct }