//TODO 0: Create login screen -DJ (Complete If possible by Saturday mainly guest login)

import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Flatlist, AppRegistry, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Login = (props) => {
    return (
        <View style={styles.backGround}>
            <View style={styles.container1}>
                <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')} />
            </View>


            <Text style={styles.title}>Login</Text>

            <TextInput style={styles.itextInput} placeholder='Email' />
            <TextInput style={styles.itextInput} placeholder='Password' />

            <TouchableOpacity

                onPress={() => props.navigation.navigate('Home')}
                style={styles.button}
            >
                <Text style={styles.title}>Login</Text>
            </TouchableOpacity>
            {/* <script src="https://accounts.google.com/gsi/client" async defer></script>
             
                function handleCredentialResponse(response) {
                    console.log("Encoded JWT ID token: " + response.credential);
                }
                window.onload = function () {
                    google.accounts.id.initialize({
                    client_id: "YOUR_GOOGLE_CLIENT_ID",
                    callback: handleCredentialResponse
                    });
                    google.accounts.id.renderButton(
                    document.getElementById("buttonDiv"),
                    { theme: "outline", size: "large" }  // customization attributes
                    );
                    google.accounts.id.prompt(); // also display the One Tap dialog
                }
             */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('NewAccount')}
            >
                <Text style={styles.title}>Create Account</Text>
            </TouchableOpacity>

        </View>
    );
}
//TODO1: send to mainpage after completion


//TODO2: Guest login(Straight navigation with guest user to mainpage. find out if we can make one universal account that does not change password. ) 



//TODO 3: make a create account button or sign in with GOOGLE

//TODO 4: find a way to change passwords after implementation.

//TODO5: store account info in a .txt file.

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

export default Login;