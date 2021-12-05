import React, { useContext } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Flatlist, AppRegistry, Image } from "react-native";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";
import {Context as AuthContext} from "../context/AuthContext";

const Login = () => {

    const {state, signin} = useContext(AuthContext);

    return <View style={styles.backGround}>
        <AuthForm
            headerText="Sign In to Kabob House"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={({email, password})=> {signin({email,password})}}
            />
        <NavLink 
            routeName="Signup"
            text="Don't have an account? Sign up instead!"
        />
        </View>
}

Login.navigationOptions=()=> {
    return{
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    backGround:{
        borderWidth:10,
        flex:1,
        justifyContent: 'center',
        marginBottom:200,
        backgroundColor: "#fff"
    },
});

export default Login;