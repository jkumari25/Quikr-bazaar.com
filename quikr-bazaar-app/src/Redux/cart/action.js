import * as types from "./actionTypes";
import axios from "axios";

export const getCartItem = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_CART_ITEM_REQUEST,
  });

  axios
    .get("https://fake-json-server-flax.vercel.app/cart")
    .then((res) => {
        // console.log(res.data)
      dispatch({
        type: types.GET_CART_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      getCartItem();
      dispatch({
        type: types.GET_CART_ITEM_FAILURE,
      });
    });
};

export const addCartItem = (payload) => (dispatch) => {
  console.log("payload", payload);
  dispatch({
    type: types.ADD_TO_CART_REQUEST,
  });

  axios
    .post("https://fake-json-server-flax.vercel.app/cart", payload)
    .then((res) => {
      dispatch({
        type: types.ADD_TO_CART_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: types.ADD_TO_CART_FAILURE,
      });
    });
};

export const updateCartItem = (payload) => (dispatch) => {
  dispatch({
    type: types.QUANTITY_UPDATE_REQUEST,
  });

  axios
    .get("https://fake-json-server-flax.vercel.app/cart")
    .then((res) => {
      dispatch({
        type: types.QUANTITY_UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: types.QUANTITY_UPDATE_FAILURE,
      });
    });
};

export const deleteCartItem = (payload) => (dispatch) => {
  // console.log("pay",payload)
  dispatch({
    type: types.DELETE_ITEM_REQUEST,
  });

  return axios
    .delete(`https://fake-json-server-flax.vercel.app/cart/${payload}`)
    .then((res) => dispatch({
      type: types.DELETE_ITEM_SUCCESS,
      // payload: res.data,
    })
      // getCartItem();
    )
    .catch(() => {
      dispatch({
        type: types.DELETE_ITEM_FAILURE,
      });
    });
};
