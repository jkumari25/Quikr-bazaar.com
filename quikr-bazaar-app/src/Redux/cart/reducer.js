import * as types from "./actionTypes"

const InitialState={
cart:[],
isLoading:false,
isError:false,
}

export const reducer = (state = InitialState,action) => {
    const { type, payload } = action;

    switch (type) {
//ADD
        case types.ADD_TO_CART_REQUEST:
            return {
                ...state,
                isLoading:true,
            }

            case types.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading:false,
                // cart:{...state.cart,payload}
            }

            case types.ADD_TO_CART_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
              //GET

            case types.GET_CART_ITEM_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                }
    
                case types.GET_CART_ITEM_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    cart: payload
                }
    
                case types.GET_CART_ITEM_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:true
                }
              //DELETE

                case types.DELETE_ITEM_REQUEST:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                    case types.DELETE_ITEM_SUCCESS:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                    case types.DELETE_ITEM_FAILURE:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                  //UPDATE
                  
                    case types.QUANTITY_UPDATE_REQUEST:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }

                    case types.QUANTITY_UPDATE_SUCCESS:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                    case types.QUANTITY_UPDATE_FAILURE:
                        return {
                            ...state,
                            isLoading:false,
                            isError:true
                        }
        default:
         return state
    }
}