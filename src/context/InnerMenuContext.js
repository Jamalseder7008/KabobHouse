import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const innerMenuReducer = (state, action) => {
    switch(action.type) {
        case 'load_details':
            return [...state, {title: title}]
        case 'add_cartitem':
            return [...state, {id: Math.floor(Math.random() *9999999), title: `Item #${state.length+1}`}]
        default:
            return state;
    }


}


const addCartItem = (dispatch) => {
    return(title, content) => {
        dispatch({type: 'add_cartitem', payload: {title:title, content:content}});
    }
    
}
    const loadDetails = (dispatch) => {
        return() =>{
        dispatch({type: 'load_details'});
    }
}
export const {Context, Provider} = createDataContext(innerMenuReducer, {loadDetails:loadDetails, addCartItem:addCartItem}, []);