import React, {useReducer, useState} from "react";
import createDataContext from "./createDataContext";


const appetizerReducer = (state, action) => {
    switch(action.type) {
        case 'load_appetizers':
            return [...state, {title: `Item #${state.length+1}`}]
        // case 'add_cartitem':
        //     return [...state, 
        //         {
        //         id: Math.floor(Math.random()*9999999), 
        //         title: action.payload.title, 
        //         price: action.payload.price
        //     }
        // ]

        default:
            return state;
    }

}

// const addCartItem = (dispatch) => {
//     return(title, price) => {
//         dispatch({
//             type: 'add_cartitem', 
//             payload: {title:title, price:price}
//         });
//     }
//must be in cartContext.js    
// }


    const loadAppetizers = (dispatch) => {
        return() =>{
        dispatch({type: 'load_appetizers'});
    }
}

export const {Context, Provider} = createDataContext(appetizerReducer, {loadAppetizers:loadAppetizers}, 
    [
        {id: 100, title: "Hummus", description: "pureed chick peas tahini with olive oil", imageSource: require('../../assets/Hummus.jpg'), price: 7},
        {id: 101, title: "Baba Ghanoush", description: "pureed eggplant tahini with olive oil",imageSource: require('../../assets/babaghanoush.jpg'), price: 7},
        {id: 102, title:"Labneh", description:"tangy creamed greek yogurt with olive oil",imageSource: require('../../assets/Labneh.jpg'), price: 6},
        {id: 103, title:"Breakfast Combo", description:"hummus, labneh, baba ghanoush, and falafel",imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 15},
        {id: 104, title:"Grape Leaves", description:"grape leaves stuffed with veggies and rice (8pc)",imageSource: require('../../assets/GrapeLeaves.jpg'), price: 8},
        {id: 105, title:"Falafel", description:"deep fried chick peas and herbs bites(6pc)",imageSource: require('../../assets/falafel.jpg'), price: 5},
        {id: 106, title:"Fava Foul", description:"muddled fava beans and jalapeno sauce", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 8},
        {id: 107, title:"Musabaha", description:"whole chick peas, hummus, and jalapeno sauce with olive oil",imageSource: require('../../assets/KabobHouseLogo.jpg'),price: 8},
        {id: 108, title:"Meat Pie", description:"spicy ground beef and veggies on bread(2pc)",imageSource: require('../../assets/meatpie.jpg'), price: 6},
        {id: 109, title:"Zaatar Pie", description:"earthy spice blend with olive oil on bread(2pc)",imageSource: require('../../assets/ZaatarPie.jpg'), price: 5},
        {id: 110, title:"Spinach Pyramid", description:"spinach and spiced onions in bread(2pc)", imageSource: require('../../assets/SpinachPie.jpg'), price: 6},
        {id: 111, title:"Cheese and Herb Pie", description:"crumble cheese mix and fresh herbs in bread(2pc)",imageSource: require('../../assets/CheesePie.jpg'), price: 6},
        {id: 112, title:"Shawarma Hummus Chicken", description:"Hummus with Chicken Shawarma on top",imageSource: require('../../assets/chickenhummus.jpg'), price: 14},
        {id: 113, title:"Shawarma Hummus Beef", description:"Hummus with Beef Shawarma on top", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 15}

    ]);