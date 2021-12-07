import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, Image, ScrollView, Touchable} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageDetail from "../components/ImageDetail";
import {Context as DrinksContext} from "../context/DrinksContext";
import Logo from "../components/Logo";
import Spacer from "../components/Spacer";

const Drinks = (props) => {

    const{state, loadDrinks} = useContext(DrinksContext);
    return (
        <View style={styles.backGround}>
            <FlatList
                ListHeaderComponent={
                    <>
                    <Logo />
                    <Spacer>
                        <Text style={styles.title}>Drinks{"\n"}</Text>
                    </Spacer>
                    </>}
                        data={state}
                        keyExtractor={(drink) => {return drink.title, drink.price, drink.id}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuDrink', {id:item.id})}>
                                <ImageDetail title={item.title} imageSource={item.imageSource}/>
                                {/* <Text>{item.title}</Text> */}
                            </TouchableOpacity>
                        )}
                ListFooterComponent={<Text>{"\n"}</Text>}/>
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