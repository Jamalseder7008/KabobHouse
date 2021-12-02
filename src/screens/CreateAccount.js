//TODO 0: Create login screen -DJ (Complete If possible by Saturday mainly guest login)

import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Flatlist, AppRegistry, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CreateAccount = (props) => {
    return (
        <View style={styles.backGround}>
            <View style={styles.container1}>
                <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')} />
            </View>


            <Text style={styles.title}>Create Account</Text>

            <TextInput style={styles.itextInput} placeholder='Email' />
            <TextInput style={styles.itextInput} placeholder='Password' />
            <TextInput style={styles.itextInput} placeholder='Password' />

            <TouchableOpacity

                onPress={() => props.navigation.navigate('Home')}
                style={styles.button}
            >
                <Text style={styles.title}>Create Account</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        alignContent: "space-around",
        fontSize: 20,
        fontWeight: "bold",
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 300,
        height: 400
    },
    container1: {

        alignItems: "center"
    },
    logostyle: {
        width: 150,
        height: 150
    },
    itextInput: {
        margin: 15,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1
    },
    button: {
        marginTop: 20,
        backgroundColor: "red",
        padding: 15,
        borderRadius: 50,
    }

});

export default CreateAccount;