import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const innerMenuReducer = (state, action) => {
    switch(action.type) {
        case 'load_details':
            return [...state, {title: `Item #${state.length+1}`}]
        default:
            return state;
    }

}


    const loadDetails = (dispatch) => {
        return() =>{
        dispatch({type: 'load_details'});
    }
}
export const {Context, Provider} = createDataContext(innerMenuReducer, {loadDetails:loadDetails}, []);