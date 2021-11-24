import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const wrapReducer = (state, action) => {
    switch(action.type) {
        case 'load_wraps':
            return [...state, {title: `Item #$(state.length+1}`}]
        default:
            return state;
    }

}


    const loadWraps = (dispatch) => {
        return() =>{
        dispatch({type: 'load_wraps'});
    }
}

export const {Context, Provider} = createDataContext(wrapReducer, {loadWraps:loadWraps}, [
    {id: 138, title: "Chicken Shawarma Wrap",  description: "Garlic and herb Chicken Shawarma wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/chickenwrap.jpg'), price: 10},
    {id: 139, title: "Falafel Wrap", description: "Garlic and herb Falafel wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 10},
    {id: 140, title: "Beef Shawarma Wrap", description: "Garlic and herb Beef Shawarma wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/beefwrap.jpg'), price: 10},
    {id: 141, title: "Gyro Wrap",description: "Garlic and herb Gyro wrap dressed chefs choice served with seasoned fries",imageSource:require('../../assets/GyroWrap.jpg'), price: 10},
    {id: 142, title: "Kufta Kabob Wrap",description: "Garlic and herb Kufta Kabob wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},
    {id: 143, title: "Lamb Kabob Wrap",description: "Garlic and herb Lamb Kabob wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},
    {id: 144, title: "Shrimp Wrap",description: "Garlic and herb Shrimp Wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},
    {id: 145, title: "Veggie Wrap",description: "Garlic and herb sautteed veggies wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},

]);