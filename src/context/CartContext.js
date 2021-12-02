import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const cartReducer = (state, action) => {
    switch(action.type) {
        case 'add_cartitem':
            return [...state, {
                id: Math.floor(Math.random()*9999999), 
                title: action.payload.title, 
                price: action.payload.price
            }]
        case 'delete_cartitem':
            return state.filter((cartItem) => {
                return cartItem.id !== action.payload
            });
        default:
            return state;
    }

}


//TODO1: Get cartContext 
//Go through loop of the cart and find total

const addCartItem = (dispatch) => {
    return(title,  price) => {
        dispatch({
            type: 'add_cartitem', 
            payload: {title:title, price:price}
        });
    }
    
}
    const deleteCartItem = (dispatch) => {
        return(id) => {
            dispatch({type: 'delete_cartitem', payload: id});
        }
    }

export const {Context, Provider} = createDataContext(cartReducer, {addCartItem:addCartItem, deleteCartItem: deleteCartItem}, []);
