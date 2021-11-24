import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const drinkReducer = (state, action) => {
    switch(action.type) {
        case 'load_drinks':
            return [...state, {title: `Item #$(state.length+1}`}]
        default:
            return state;
    }

}


    const loadDrinks = (dispatch) => {
        return() => {
        dispatch({type: 'load_drinks'});
    }
}

export const {Context, Provider} = createDataContext(drinkReducer, {loadDrinks:loadDrinks}, [
        {id: 114, title: "Lemonade Mint Slush",  description: "blended lemonade, ice, and mint", imageSource: require('../../assets/mintlemonade.jpg'), price: 4},
        {id: 115, title: "Lebaneze Iced Tea", description: "Sweet tea with rose water", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 3},
        {id: 116, title: "Water", description: "Water bottle(ozarka)", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 1.50},
        {id: 117, title: "Fountain Drink",description: "20oz fountain drink",imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 2.75},
        {id: 118, title: "Yogurt drink",description: "Ayran-Shaneenah-yogurt drink", imageSource: require('../../assets/yogurtdrink.jpg'), price:4},
]);