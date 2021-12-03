import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BottomNav = (props) => {

            return <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Home")}}>
                            <Text style={styles.texts}>Home</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Phone")}}>
                            <Text style={styles.texts}>Phone</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Menu")}}>
                            <Text style={styles.texts}>Menu</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Map")}}>
                            <Text style={styles.texts}>Map</Text> 
                        </TouchableOpacity>
                
                    </View>

}

const styles=StyleSheet.create({
    button: { 
        
        
        
        width: "25%", 
        height: 30, 
        borderColor: "black", 
        borderRadius: 5, 
        backgroundColor: "#b12135", 
        justifyContent: "center",
        marginRight:4
    },
    container:{
        // position: 'absolute',
        margin: 5,
        // bottom: 0,
        // left: 0,
        flexDirection:'row',

        alignContent: 'center',
        

    },
    texts: {
        fontSize: 15,
        alignSelf: 'center',
        color: "white"
    }
})

export default BottomNav;