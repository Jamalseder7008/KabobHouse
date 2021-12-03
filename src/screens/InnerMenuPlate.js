import React, {useContext} from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import { Context as PlateContext } from "../context/PlatesContext";
import {Feather} from '@expo/vector-icons'; 
import {Context as CartContext} from "../context/CartContext";

const InnerMenuPlate = (props) => {
    //const{state} = useContext(PlateContext);
    const PlateStuff = useContext(PlateContext);
    const PlateState = PlateStuff.state;
    const itemID = props.navigation.getParam("id");
    const itemDetails = PlateState.find((itemDetails) => {
        return itemID === itemDetails.id;
    })
    const{state, addCartItem} = useContext(CartContext);

    return (
        <View style={styles.backGround}>
            <ScrollView>
                <View>
                    <View style={styles.viewStyle}>
                    <Text>{"\n\n\n"}</Text>
                    <Text style={styles.title}>{itemDetails.title} {"\n"}</Text>
                    <Image style={styles.image} source={itemDetails.imageSource}/>
                        <View style={styles.viewStyle1}>
                        <Text>{"\n"}</Text>
                        
                        <Text style={styles.textStyle}>{"\n"}{itemDetails.description} {"\n"}</Text>
                        <Text style={styles.textStyle}> ${itemDetails.price}{"\n"}</Text>    
                        <TouchableOpacity style={styles.container} onPress={()=> {addCartItem(itemDetails.title, itemDetails.price);}}>
                            <Text style={styles.text}>Add to Cart</Text>
                        </TouchableOpacity>     
                        </View>
                        
                    
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
InnerMenuPlate.navigationOptions = (props) => {
    return{
        headerRight:() => (
            <TouchableOpacity onPress={ () => {props.navigation.navigate("Cart")}}>
                <Feather name="shopping-cart" size={30} />
            </TouchableOpacity>
           
        )
    };
}

const styles = StyleSheet.create({
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
    },
    container1:{
        alignContent: "space-between"
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: '#fff',
        textShadowRadius: 20
      },
      container: {
        padding:10,
        backgroundColor: '#b12135',
        margin: 5,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
    viewStyle:{
        flexDirection: "column",
          alignContent: "space-around",
        alignItems: "center", 
      },
      viewStyle1:{
          flexDirection: "column",
          alignContent: "space-around",
          alignItems:"center",
      },
      image:{
          width : 150,
          height: 150,
      
      },
      title:{
          fontWeight: "bold",
          fontSize: 25,
      },
      textStyle:{
          flexDirection: "row",
          flexShrink: 1,
          
          fontSize:18,
          
          
      },
    subtitle: {
        
            textAlign: "center",
            alignContent: "space-around",
            fontSize: 15,
            fontWeight: "bold",
        
    },
    logostyle:{
        
        width : 150,
        height: 150,
    },
    BottomNav: {
        flexDirection:"row",
        backgroundColor: "red",
        justifyContent:"center",
        alignContent: "space-around"

    }
});

export default InnerMenuPlate;