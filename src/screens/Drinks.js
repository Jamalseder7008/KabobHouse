import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, Image, ScrollView, Touchable} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageDetail from "../components/ImageDetail";
import {Context as DrinksContext} from "../context/DrinksContext";


const Drinks = (props) => {

    const{state, loadDrinks} = useContext(DrinksContext);
    return (
        <View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                        <Text style={styles.title}>Drinks{"\n"}</Text>
                    <FlatList
                        data={state}
                        keyExtractor={(drink) => {return drink.title, drink.price, drink.id}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuDrink', {id:item.id})}>
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
// Drinks.navigationOptions = (props) => {
//     return{
//         headerRight:() => (
//             <TouchableOpacity onPress={ () => {props.navigation.navigate("Cart")}}>
//                 <Feather name="shopping-cart" size={30} />
//             </TouchableOpacity>
           
//         )
//     };
// }

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

export default Drinks;