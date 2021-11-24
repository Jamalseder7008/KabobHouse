import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const plateReducer = (state, action) => {
    switch(action.type) {
        case 'load_plates':
            return [...state, {title: `Item #$(state.length+1}`}]
        default:
            return state;
    }

}

    const loadPlates = (dispatch) => {
        return() => {
        dispatch({type: 'load_plates'});
    }
}

export const {Context, Provider} = createDataContext(plateReducer, {loadPlates:loadPlates}, [
    {id: 119, title:"Chicken Shawarma Plate",description: "shave cut marinated Chicken", imageSource: require('../../assets/Chickenshawplate.jpg'), price: 17},
    {id: 120, title:"Beef Shawarma Plate", description: "tender thin cut Beef",imageSource: require('../../assets/beefplate.jpg'), price: 18},
    {id: 121, title:"Gyro Plate", description: "Lamb and Beef thin cut mix", imageSource: require('../../assets/gyroplate.jpg'), price: 17},
    {id: 122, title:"Falafel Plate", description: "8 piece fried chick pea bites", imageSource: require('../../assets/falafelplate.jpg'),price: 15},
    {id: 123, title:"Chicken Kabob Plate", description: "Grilled Chicken breast chunks", imageSource: require('../../assets/ChickenKabob.jpg'),price: 19},
    {id: 124, title:"Lamb Kabob Plate", description: "Grilled Tender Lamb chunks", imageSource: require('../../assets/lambkabob.jpg'), price: 22},
    {id: 125, title:"Kufta Kabob Plate", description: "Grilled Ground Beef and Lamb mix", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 19},
    {id: 126, title:"Kabob Kombo", description:"Grilled Lamb, Kufta, and Chicken Kabob", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 25},
    {id: 127, title:"Shawarma Kombo", description:"Chicken, Beef, or Gyro shawarma", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 22},
    {id: 128, title:"Lamb Chops Plate",description: "Fire-Grilled garlic marinated rib cuts", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 34},
    {id: 129, title:"Shrimp Sauteed Plate", description:"Sauteed shrimp and veggies", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 25},
    {id: 130, title:"Chicken Tekka Plate", description:"Fire-Grilled half chicken", imageSource:require('../../assets/chickentekka.jpg'), price: 19},
    {id: 131, title:"Veggie Sauteed Plate", description: "Sauteed onions, peppers, zucchini, and carrots", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 12}
]);