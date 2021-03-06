import React from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity, Image} from 'react-native';
import {Feather} from "@expo/vector-icons"
import Spacer from "../components/Spacer";
import Logo from "../components/Logo";

const Menu = (props) => {

    return<View style={styles.backGround}>
            <Logo />
                <Text style={styles.title}>MENU{"\n"}</Text>
            <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate("Appetizers")}}>
                <Text style={styles.text}>APPETIZERS</Text>
            </TouchableOpacity>
        <Spacer/>
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Plates")}}>
                <Text style={styles.text}>PLATES</Text>
            </TouchableOpacity>
        <Spacer />
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Wraps")}}>
                <Text style={styles.text}>WRAPS</Text>
            </TouchableOpacity>
        <Spacer/>
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Salads")}}>
                <Text style={styles.text}>SOUPS AND SALADS</Text>
            </TouchableOpacity>
        <Spacer/>
            <TouchableOpacity style={styles.container} onPress = {() => {props.navigation.navigate("Drinks")}}>
                <Text style={styles.text}>DRINKS</Text>
            </TouchableOpacity>
        <Spacer/>
    </View>;
}
Menu.navigationOptions = (props) => {
    return{
        headerRight:() => (
           
            <TouchableOpacity onPress={ () => {props.navigation.navigate("Cart")}}>
                <Feather name="shopping-cart" size={30} />
            </TouchableOpacity>
            
        )
    };
}




const styles = StyleSheet.create({ 
   
    text: {
        fontSize: 25,
        textAlign: 'center',
        textShadowColor: '#fff',
        color: 'white',
        textShadowRadius: 20,
        padding: 3
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
        flex:1,
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
});

export default Menu;
