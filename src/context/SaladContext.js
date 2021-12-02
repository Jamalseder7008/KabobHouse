import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const saladReducer = (state, action) => {
    switch(action.type) {
        case 'load_salads':
            return [...state, {title: `Item #$(state.length+1}`}]
        default:
            return state;
    }

}


    const loadSalads = (dispatch) => {
        return() => {
        dispatch({type: 'load_salads'});
    }
}

export const {Context, Provider} = createDataContext(saladReducer, {loadSalads:loadSalads}, [
    {id: 132, title: "Greek Salad",  description: "Romaine lettuce, cucumber, onion, olives, tomatoes, bell peppers, feta cheese dressed with lemon, salt, and olive oil dressing",imageSource: require('../../assets/greeksalad.jpg'), price: 10},
    {id: 133, title: "Arabic Salad", description: "Diced cucumbers, tomato, green onion, parsley dressed with lemon, salt, and olive oil dressing", imageSource: require('../../assets/arabicsalad.jpg'),price: 8},
    {id: 134, title: "Tabouli",      description: "fine chopped parsley, cracked wheat, tomatoes, and cucumber dressed with lemon salt and olive oil dressing", imageSource: require('../../assets/Tabula.jpg'), price: 8},
    {id: 135, title:"KH Special Salad", description: "Romaine lettuce, cucumbers, onions, tomatoes, onions, apples, mint, bell peppers, sunflower seeds, and zaatar dressed with lemon, salt, and olive oil dressing", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 12},
    {id: 136, title: "Lentil Soup Cup", description: "Flavorful lentil, carrot, and onion pureed soup(Cup 8oz)", imageSource: require('../../assets/LSCup.jpg'),price: 5},
    {id: 137, title: "Lentil Soup Bowl", description: "Flavorful lentil, carrot, and onion pureed soup(Bowl 12oz)", imageSource: require('../../assets/LSBowl.jpg'), price: 7}
]);