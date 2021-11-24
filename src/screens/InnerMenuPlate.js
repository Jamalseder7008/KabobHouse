import React, {useContext} from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import { Context as PlateContext } from "../context/PlatesContext";
//import ItemDetail from "../components/ImageDetail";
//import { Context as SaladContext } from "../context/SaladContext";

// import ItemDetail from "../components/ItemDetail";
// import CartContext from "../context/CartContext";
// import InnerMenuContext from "../context/InnerMenuContext"

const InnerMenuPlate = (props) => {
    const{state} = useContext(PlateContext);
    const itemID = props.navigation.getParam("id");
    const itemDetails = state.find((itemDetails) => {
        return itemID === itemDetails.id;
    })
    

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
                        
                        <Text style={styles.textStyle}>{itemDetails.description} {"\n"}</Text>
                        <Text style={styles.textStyle}> ${itemDetails.price}</Text>     
                        </View>
                        
                    
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
    },
    container1:{
        alignContent: "space-between"
    },
    container:{
        
        alignItems: "center"
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