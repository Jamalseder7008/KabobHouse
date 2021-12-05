//TODO 0: Create login screen -DJ (Complete If possible by Saturday mainly guest login)
import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Flatlist, AppRegistry, Image } from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";

const CreateAccount = (props) => {

    
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const {state, signup} = useContext(AuthContext);
    
    console.log(state)


    return <View style={styles.backGround}>
        <AuthForm
            headerText="Sign up for Kabob House"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={({email,password}) =>signup({email,password})}
            />
            <NavLink 
            routeName="Login"
            text="Already have an account? Sign in!"
            />
        </View>
    
}

CreateAccount.navigationOptions =() =>{
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    backGround:{
        borderWidth:10,
        flex:1,
        justifyContent: 'center',
        marginBottom:200,
        backgroundColor: "#fff"
    },
    errorMessage:{
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
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
    button: {
        marginTop: 20,
        backgroundColor: "red",
        padding: 15,
        borderRadius: 50,
    },
    backGround:{
        borderWidth:10,
        flex:1,
        justifyContent: 'center',
        marginBottom:200,
        backgroundColor: "#fff"
    },
});

export default CreateAccount;