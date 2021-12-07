import React, { useContext, useState } from "react";
import {Text, StyleSheet, View, FlatList,Button, Image, ScrollView, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";
import { Context as WrapsContext } from "../context/WrapsContext";
import Logo from "../components/Logo.js";
import Spacer from "../components/Spacer";

const Wraps = (props) => {

    const{state, loadWraps} = useContext(WrapsContext);
    return (
        <View style={styles.backGround}>
            <FlatList
                ListHeaderComponent={
                    <>
                    <Logo />
                    <Spacer>
                    <Text style={styles.title}>Wraps{"\n"}</Text>
                    </Spacer>
                    </>}
                        data={state}
                        keyExtractor={(wrap) => {return wrap.title,wrap.price, wrap.id}} 
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuWrap', {id:item.id})}>
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

export default Wraps;
