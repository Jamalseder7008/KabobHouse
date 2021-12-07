import React, { useContext, useState } from "react";
import {Text, StyleSheet, View, FlatList,Button, ScrollView, Image, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";
import { Context as SaladContext } from "../context/SaladContext";
import BottomNav from "../components/BottomNav";
import Logo from "../components/Logo";
import Spacer from "../components/Spacer";

const Salads = (props) => {
    const{state, loadSalads} = useContext(SaladContext);
    return (<View style={styles.backGround}>
        <FlatList
            ListHeaderComponent={
                <>
                <Logo />
                <Spacer>
                    <Text style={styles.title}>Soups and Salads{"\n"}</Text>    
                    </Spacer>
                    </>}
                        data={state}
                        keyExtractor={(salad) => {return salad.title}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuSalad', {id:item.id})}>
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

export default Salads;