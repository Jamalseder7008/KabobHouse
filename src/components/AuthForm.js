import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';
import Logo from './Logo';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Spacer>
            <Logo />
        

            <Text style={styles.title}>{headerText}</Text>
            <Spacer />
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={(newEmail) => {setEmail(newEmail)}}
            />
            <Spacer />

            <Input 
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                value={password}
                onChangeText={(newPassword) => {setPassword(newPassword)}}
                />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            <Spacer>
                <TouchableOpacity

                    onPress={() => {onSubmit({email,password})}}
                    style={styles.button}
                    >
                    <Text style={styles.buttontext}>{submitButtonText}</Text>
                </TouchableOpacity>
        
            </Spacer>
            </Spacer>
        </>
    
};

const styles=StyleSheet.create({
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
        backgroundColor: "#ad1c30",
        padding: 15,
        borderRadius: 50,
    },
    buttontext: {
        textAlign: "center",
        alignContent: "space-around",
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff'
    }
});

export default AuthForm;