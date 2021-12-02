import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, TouchableOpacity, Image, ScrollView} from "react-native";
import ImageDetail from "../components/ImageDetail";
//import CartContext from "../context/CartContext";
import {Context as AppetizerContext} from "../context/AppetizerContext";
//import {Feather} from '@expo/vector-icons'; 
//import MenuForm from "../components/MenuForm";



//Use dictionary to populate each imagedetail component
//0 is title, 1 is description, 2 is source, 3 is price
const Appetizers = (props) => {
  
    const{state, loadAppetizers} = useContext(AppetizerContext);
    return (
        <View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                    <Text style={styles.title}>Appetizers{"\n"}</Text>     
                    <FlatList
                        data={state}
                        keyExtractor={(appetizer) => {return appetizer.title}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuAppetizer', {id:item.id})}>
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