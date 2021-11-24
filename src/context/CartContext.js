import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const cartReducer = (state, action) => {
    switch(action.type) {
        case 'add_cartitem':
            return [...state, {id: Math.floor(Math.random() *9999999), title: `Item #${state.length+1}`}]
        case 'delete_cartitem':
            return state.filter((cartItem) => {
                return cartItem.id !== action.payload
            });
        default:
            return state;
    }

}


    const addCartItem = (dispatch) => {
        return() => {
            dispatch({type: 'add_cartitem'});
        }
        
    }
    const deleteCartItem = (dispatch) => {
        return(id) => {
            dispatch({type: 'delete_cartitem', payload: id});
        }
    }

export const {Context, Provider} = createDataContext(cartReducer, {addCartItem:addCartItem, deleteCartItem: deleteCartItem}, []);