import React from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity, Image} from 'react-native';

const Menu = (props) => {


    //TODO 0: make one page that can take in a list and populate with that info.

    //TODO 1: make a Appetizers button -onpress navigate to appetizers page

    //TODO 2: make a plates button -onpress navigate to plates page
 
    //TODO 3: make a Wraps button -onpress navigate to wraps page

    //TODO 4: make a Drinks button -onpress navigate to drinks page

    //TODO 4.5: make a salads button -onpress navigate to salads page

    //TODO 5: make a Desserts button -onpress navigate to desserts page

    //TODO 6: make a sides button -onpress navigate to sides page

    //TODO 7: put the kabobhouselogo at the top center of the menu

    //TODO 11: put a bar at the bottom of the screen with 4 subsections
    //TODO 12: left button in the subsection will be the home button(menu)
    //TODO 13: second button in the bar will be the phone button(allow for call functionality, call +1(504)581-8695)
    //TODO 14: third button will be the cart button
    //TODO 15: last button will be the maps button

    return<View style={styles.backGround}>
            <View style={styles.container1}>
                <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
            </View>
            <Text style={styles.title}>MENU{"\n"}</Text>
            <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate("Appetizers")}}>
                <Text style={styles.text}>APPETIZERS </Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Plates")}}>
                <Text style={styles.text}>PLATES </Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Wraps")}}>
            <Text style={styles.text}>WRAPS </Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Salads")}}>
            <Text style={styles.text}>SOUPS AND SALADS </Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Drinks")}}>
            <Text style={styles.text}>DRINKS </Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            

            
            
    </View>;
}

const styles = StyleSheet.create({ 
    //TODO 7: implement space between each button

    //TODO 8: make buttons red and background screen white

    //TODO 9: center the logo, make the correct size

    //TODO 10: make the word menu bold

    //TODO 16: stylesheet for the bar at bottom, use flexDirection:row
    //TODO 17: place each button in correct spots.
    text: {
        fontSize: 30,
        textAlign: 'center',
        textShadowColor: '#fff',
        color: 'white',
        textShadowRadius: 20
    },
    container: {
        backgroundColor: '#b12135',
        margin: 5,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
    },
    title:{
        textAlign: "center",
        alignContent: "space-around",
        fontSize: 20,
        fontWeight: "bold",
    },
    container1:{
        
        alignItems: "center"
    },
    logostyle:   {
        width: 150,
        height: 150
    },
    BottomNav: {
        flexDirection:"row",
        backgroundColor: "red",    
        justifyContent:"center",
        alignContent: "space-around"
    
    }
});

export default Menu;
