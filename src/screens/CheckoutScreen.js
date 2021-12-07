import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from "react-native";
import { Input } from "react-native-elements";

const CheckoutScreen = (props) => {

    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [CVV, setCVV] = useState('');

    return <View style={styles.backGround}>
                <View style={styles.container1}>
                    <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                </View>

                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Card Number"
                    value={cardNumber}
                    onChangeText={(newCardNumber) => {setCardNumber(newCardNumber)}}
                />

                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Expiration Date"
                    value={expiration}
                    onChangeText={(newExpiration) => {setExpiration(newExpiration)}}
                />

                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="CVV"
                    value={CVV}
                    onChangeText={(newCVV) => {setCVV(newCVV)}}
                />

                <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate("Complete")}}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>  

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
        color: 'white',
        textShadowRadius: 20
    },
});

export default CheckoutScreen;
