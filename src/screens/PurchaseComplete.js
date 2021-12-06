import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from "react-native";
import { Input } from "react-native-elements";

const PurchaseComplete = (props) => {

    return <View style={styles.backGround}>
                <View style={styles.container1}>
                    <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    <Text style={styles.text}>Thank You For Your Purchase!</Text> 
                </View>

            </View>
}

const styles = StyleSheet.create({
    logostyle:{
        height:150,
        width: 150
    },
    container1:{
        alignItems: "center"
    },
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
    },
    container: {
        backgroundColor: '#b12135',
        margin: 5,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
text: {
        fontSize: 30,
        textAlign: 'center',
        textShadowColor: '#fff',
        color: 'black',
        textShadowRadius: 20
    },
});

export default PurchaseComplete;
