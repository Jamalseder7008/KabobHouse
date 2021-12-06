import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {Context as CartContext} from "../context/CartContext";



const CartScreen =() => {

    
    const{state, deleteCartItem, getCartTotal} = useContext(CartContext);
    
    let sumFunction = function(a, b)
    {
        return a + b
    }
    let total = 0;
    state.forEach(cartItem => {
        total = sumFunction(total, cartItem.price)
    })
    
    
    

    // const [count, setCounter] = useState(0);

    // const [cart, setCart] = useState(0);

    // const addToCart = (productId, variantInfo) => {

    return<View style={styles.backGround}>
            <View style={styles.container1}>
                <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
            </View>
            <Text style={styles.title}>CART{"\n"}</Text>
            {/* <Button title="Add to Cart" onPress={() => { addCartItem()}}/> */}
            <FlatList
                data={state}
                keyExtractor={(cartItem) => {return cartItem.title, cartItem.price}}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                        <View style={styles.cartItem}>
                        <Text style={styles.lineLeft}>{item.title} x 1</Text>
                        
                        <Text style={styles.lineRight}>$ {item.price}</Text>
                        
                        
                        </View>
                        
                        <TouchableOpacity onPress={() => {deleteCartItem(item.id)}}>
                            <Feather name="trash" style={styles.icon}/>
                        </TouchableOpacity>
                        
                    </View>                
                }}
            />
            <View>
                <Text style={styles.total}>Total: ${total}</Text>
            </View>
        {/* <Text>Current Count: {count}</Text> */}

        <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate("Checkout")}}>
                <Text style={styles.text}>Pay </Text>
            </TouchableOpacity>    
        </View>
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: 'grey'
    },
    total: {
        fontSize: 20,
        paddingRight: 20,
        alignSelf: "flex-end"
    },
    lineLeft: {
        fontSize: 20, 
        lineHeight: 40, 
        color:'#333333' 
      },
      lineRight: { 
        flex: 1,
        fontSize: 20, 
        fontWeight: 'bold',
        lineHeight: 40, 
        color:'#333333', 
        textAlign:'right',
      },
    cartItem:{
        fontSize: 18,
        justifyContent: "space-between",  
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
