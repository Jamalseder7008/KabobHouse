import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, ScrollView, Image, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";
import {Context as PlatesContext} from "../context/PlatesContext"
import Logo from "../components/Logo";
import Spacer from "../components/Spacer";

const Plates = (props) => {

    const{state, loadPlates} = useContext(PlatesContext);
    return (
        <View style={styles.backGround}>
            <FlatList
                ListHeaderComponent={
                    <>
                    <Logo />
                    <Spacer>
                    <Text style={styles.title}>Plates</Text>    
                    <Text style={styles.subtitle}>Served with Rice, Hummus, and Salad{"\n"} </Text>
                    </Spacer>
                    </>}
                        data={state}
                        keyExtractor={(plate) => {return plate.title, plate.id, plate.price}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuPlate', {id:item.id})}>
                                <ImageDetail title={item.title} imageSource={item.imageSource}/>
                                {/* <Text>{item.title}</Text> */}
                            </TouchableOpacity>
                        )}
            ListFooterComponent={<Text>{"\n"}</Text>}/>
        </View>        
    );
}
const styles = StyleSheet.create({
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
    },
    container1:{
        alignContent: "space-between"
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
    subtitle: {
        
            textAlign: "center",
            alignContent: "space-around",
            fontSize: 15,
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

export default Plates;