import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const CartScreen =() => {

    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="Increase" onPress={function(){ setCounter(counter+1);}}/>
        <Button title="Decrease"onPress={function(){setCounter(counter-1);}}/>
        <Text>Current amount of items in cart: {counter} </Text>
    </View>
}

const style = StyleSheet.create({});

export default CartScreen;