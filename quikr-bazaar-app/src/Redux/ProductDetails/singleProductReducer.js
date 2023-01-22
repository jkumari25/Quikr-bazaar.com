import * as types from "./singleProductActionTypes";

const initialState = {
    product:{},
    isLoading: false,
    isError: false,
}


const singleProductReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch(type){
        case types.GET_PRODUCTS_DETAILS_REQUEST:
            return {...state, isLoading: true};
        
        case types.GET_PRODUCTS_DETAILS_SUCCESS:
            return {...state, isLoading: false, product: payload};

        case types.GET_PRODUCTS_DETAILS_ERROR:
            return {...state, isLoading: false, isError: true};

        default:
            return state;
    }

}

export { singleProductReducer };
