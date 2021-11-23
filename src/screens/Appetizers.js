import React, { useState } from "react";
import {Text, StyleSheet, View, FlatList,Button, TouchableOpacity, Image, ScrollView} from "react-native";
import ImageDetail from "../components/ImageDetail";



// var Appetizer = {Hummus: ["Hummus", "pureed chick peas tahini with olive oil", require('../../assets/Hummus.jpg'), price: 7},
//     BabaGhanoush:["Baba Ghanoush", "pureed eggplant tahini with olive oil",imageSource: require('../../assets/babaghanoush.jpg'), price: 7},
//     Labneh: ["Labneh", "tangy creamed greek yogurt with olive oil",imageSource: require('../../assets/Labneh.jpg'), price: 6},
//     BreakfastCombo: ["Breakfast Combo", "hummus, labneh, baba ghanoush, and falafel", 15],
//     GrapeLeaves: ["Grape Leaves", "grape leaves stuffed with veggies and rice (8pc)", 8],
//     Falafel: ["Falafel", "deep fried chick peas and herbs bites(6pc)",imageSource: require('../../assets/falafel.jpg'), price: 5},
//     FavaFoul: ["Fava Foul", "muddled fava beans and jalapeno sauce", 8],
//     Musabaha: ["Musabaha", "whole chick peas, hummus, and jalapeno sauce with olive oil", 8],
//     MeatPie: ["Meat Pie", "spicy ground beef and veggies on bread(2pc)",imageSource: require('../../assets/meatpie.jpg'), price: 6},
//     ZaatarPie: ["Zaatar Pie", "earthy spice blend with olive oil on bread(2pc)",imageSource: require('../../assets/ZaatarPie.jpg'), price: 5},
//     SpinachPyramid: ["Spinach Pyramid", "spinach and spiced onions in bread(2pc)", 6],
//     CheesePie:["Cheese and Herb Pie", "crumble cheese mix and fresh herbs in bread(2pc)",imageSource: require('../../assets/CheesePie.jpg'), price: 6},
//     ChickenHummus: ["Shawarma Hummus Chicken", "Hummus with Chicken Shawarma on top",imageSource: require('../../assets/chickenhummus.jpg'), price: 1}],
//     BeefHummus: ["Shawarma Hummus Beef", "Hummus with Beef Shawarma on top", 15]};
//complete uprooting of the data to entertain state into our project :)

//Use dictionary to populate each imagedetail component
//0 is title, 1 is description, 2 is source, 3 is price
const Appetizers = (props) => {
    const[Appetizer, setPrices] =useState([ 
        {title: "Hummus", description: "pureed chick peas tahini with olive oil", imageSource: require('../../assets/Hummus.jpg'), price: 7},
        {title: "Baba Ghanoush", description: "pureed eggplant tahini with olive oil",imageSource: require('../../assets/babaghanoush.jpg'), price: 7},
        {title:"Labneh", description:"tangy creamed greek yogurt with olive oil",imageSource: require('../../assets/Labneh.jpg'), price: 6},
        {title:"Breakfast Combo", description:"hummus, labneh, baba ghanoush, and falafel",imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 15},
        {title:"Grape Leaves", description:"grape leaves stuffed with veggies and rice (8pc)",imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 8},
        {title:"Falafel", description:"deep fried chick peas and herbs bites(6pc)",imageSource: require('../../assets/falafel.jpg'), price: 5},
        {title:"Fava Foul", description:"muddled fava beans and jalapeno sauce", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 8},
        {title:"Musabaha", description:"whole chick peas, hummus, and jalapeno sauce with olive oil",imageSource: require('../../assets/KabobHouseLogo.jpg'),price: 8},
        {title:"Meat Pie", description:"spicy ground beef and veggies on bread(2pc)",imageSource: require('../../assets/meatpie.jpg'), price: 6},
        {title:"Zaatar Pie", description:"earthy spice blend with olive oil on bread(2pc)",imageSource: require('../../assets/ZaatarPie.jpg'), price: 5},
        {title:"Spinach Pyramid", description:"spinach and spiced onions in bread(2pc)", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 6},
        {title:"Cheese and Herb Pie", description:"crumble cheese mix and fresh herbs in bread(2pc)",imageSource: require('../../assets/CheesePie.jpg'), price: 6},
        {title:"Shawarma Hummus Chicken", description:"Hummus with Chicken Shawarma on top",imageSource: require('../../assets/chickenhummus.jpg'), price: 1},
        {title:"Shawarma Hummus Beef", description:"Hummus with Beef Shawarma on top", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 15}
    ]);
    return (
        <View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                    <Text style={styles.title}>Appetizers{"\n"}</Text>     
                    
                    {/* <ImageDetail title={Appetizer.Hummus[0]} description={Appetizer.Hummus[1]} imageSource={Appetizer.Hummus[2]} price={Appetizer.Hummus[3]}/>
                    <ImageDetail title={Appetizer.BabaGhanoush[0]} description={Appetizer.BabaGhanoush[1]} imageSource={Appetizer.BabaGhanoush[2]} price={Appetizer.BabaGhanoush[3]}/>
                    <ImageDetail title={Appetizer.Labneh[0]} description={Appetizer.Labneh[1]} imageSource={Appetizer.Labneh[2]} price={Appetizer.Labneh[3]}/>
                    <ImageDetail title={Appetizer.BreakfastCombo[0]} description={Appetizer.BreakfastCombo[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Appetizer.BreakfastCombo[2]}/>
                    <ImageDetail title={Appetizer.GrapeLeaves[0]} description={Appetizer.GrapeLeaves[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Appetizer.GrapeLeaves[2]}/>
                    <ImageDetail title={Appetizer.Falafel[0]}  description={Appetizer.Falafel[1]} imageSource={Appetizer.Falafel[2]} price={Appetizer.Falafel[3]}/>
                    <ImageDetail title={Appetizer.FavaFoul[0]}  description={Appetizer.FavaFoul[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Appetizer.FavaFoul[2]}/>
                    <ImageDetail title={Appetizer.Musabaha[0]}  description={Appetizer.Musabaha[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Appetizer.Musabaha[2]}/>
                    <ImageDetail title={Appetizer.MeatPie[0]}  description={Appetizer.MeatPie[1]} imageSource={Appetizer.MeatPie[2]} price={Appetizer.MeatPie[3]}/>
                    <ImageDetail title={Appetizer.ZaatarPie[0]}  description={Appetizer.ZaatarPie[1]} imageSource={Appetizer.ZaatarPie[2]} price={Appetizer.ZaatarPie[3]}/>
                    <ImageDetail title={Appetizer.SpinachPyramid[0]}  description={Appetizer.SpinachPyramid[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Appetizer.SpinachPyramid[2]}/>
                    <ImageDetail title={Appetizer.CheesePie[0]}  description={Appetizer.CheesePie[1]} imageSource={Appetizer.CheesePie[2]} price={Appetizer.CheesePie[3]}/>
                    <ImageDetail title={Appetizer.ChickenHummus[0]}  description={Appetizer.ChickenHummus[1]} imageSource={Appetizer.ChickenHummus[2]} price={Appetizer.ChickenHummus[3]}/>
                    <ImageDetail title={Appetizer.BeefHummus[0]}  description={Appetizer.BeefHummus[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Appetizer.BeefHummus[2]}/> */}

                    <FlatList
                        data={Appetizer}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenu', item)}>
                                <ImageDetail title={item.title} imageSource={item.imageSource}/>
                                {/* <Text>{item.title}</Text> */}
                            </TouchableOpacity>
                        )}
                        />

                    <View style={styles.BottomNav}>
                        <TouchableOpacity onPress={() => {props.navigation.navigate("Home")}}>
                            <Text>HOME</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {props.navigation.navigate("Phone")}}>
                            <Text>Phone</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {props.navigation.navigate("Menu")}}>
                            <Text>Menu</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {props.navigation.navigate("Map")}}>
                            <Text>Map</Text> 
                        </TouchableOpacity>
                
                    </View>
                </View>
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
    },
    container:{
        
        alignItems: "center"
    },
    title:{
        textAlign: "center",
        alignContent: "space-around",
        fontSize: 20,
        fontWeight: "bold",
    },
    logostyle:{
        
        width : 150,
        height: 150,
    },
    BottomNav: {
        flexDirection:"row",
        backgroundColor: "red",
        justifyContent:"center",
        alignContent: "space-around"

    }
});

export default Appetizers;