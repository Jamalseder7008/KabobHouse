import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {Context as CartContext} from "../context/CartContext";

const CartScreen =() => {

    const{state, addCartItem, deleteCartItem} = useContext(CartContext);

    // const [count, setCounter] = useState(0);

    // const [cart, setCart] = useState(0);

    // const addToCart = (productId, variantInfo) => {

    return<View style={styles.backGround}>
            <View style={styles.container1}>
                <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
            </View>
            <Text style={styles.title}>CART{"\n"}</Text>
            <Button title="Add to Cart" onPress={() => { addCartItem()}}/>
            <FlatList
                data={state}
                keyExtractor={(cartItem) => {return cartItem.title}}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                        <Text style={styles.cartItem}>{item.title}</Text>
                        <TouchableOpacity onPress={() => {deleteCartItem(item.id)}}>
                            <Feather name="trash" style={styles.icon}/>
                        </TouchableOpacity>
                        
                    </View>                
                }}
            />
        {/* <Text>Current Count: {count}</Text> */}
        </View>
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: 'grey'
    },
    cartItem:{
        fontSize: 18
    },
    icon:{
        fontSize: 24
    },
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
    title:{
        textAlign: "center",
        alignContent: "space-around",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default CartScreen;
