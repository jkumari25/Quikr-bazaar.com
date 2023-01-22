import axios from "axios";
import * as types from "./singlePageActionTypes";

const getsingleProduct =({id}) => (dispatch) =>{
    dispatch({type: types.GET_PRODUCTS_SINGLEPAGE_REQUEST});
    return axios
    .get(`https://database-beta.vercel.app/Mobile/${id}`)
    .then((r) =>{
        dispatch({type: types.GET_PRODUCTS_SINGLEPAGE_SUCCESS, payload: r.data});
    })
    .catch((e) =>{
        dispatch({type: types.GET_PRODUCTS_SINGLEPAGE_ERROR})
    })
}

export { getsingleProduct }