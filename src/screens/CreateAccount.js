import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Flatlist, AppRegistry, Image } from "react-native";
import {Text, Input, Button} from 'react-native-elements';
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const CreateAccount = (props) => {

    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin();
    }, [])
    console.log(state)


    return <View style={styles.backGround}>
        <NavigationEvents
            onWillFocus={() => {clearErrorMessage()}}
            // onDidFocus={() => {}}
            // onWillBlur={()=> {}}
            // onDidBlur={() => {}}
            />
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
        backgroundColor: "#fff"
    },
});
export default CreateAccount;