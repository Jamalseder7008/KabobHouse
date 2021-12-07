import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, TouchableOpacity, Image, ScrollView} from "react-native";
import ImageDetail from "../components/ImageDetail";
import {Context as AppetizerContext} from "../context/AppetizerContext";
import BottomNav from "../components/BottomNav";
import Spacer from "../components/Spacer";
import Logo from "../components/Logo";

//Use dictionary to populate each imagedetail component
//0 is title, 1 is description, 2 is source, 3 is price
const Appetizers = (props) => {
  
    const{state, loadAppetizers} = useContext(AppetizerContext);
    return (<View style={styles.backGround}>
            <FlatList
                ListHeaderComponent={
                    <>
                    <Logo />
                    <Spacer>
                        <Text style={styles.title}>Appetizers{"\n"}</Text>     
                    </Spacer>
                    </>}
                        data={state}
                        keyExtractor={(appetizer) => {return appetizer.title}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuAppetizer', {id:item.id})}>
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