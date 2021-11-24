//Component has been commented out.
import React from "react";
import {Text, StyleSheet, View, Image, FlatList,Button} from "react-native";


const ItemDetail = (props) => {

    console.log(props);
    return (
        <View>
                    
                    <View style={styles.viewStyle}>
                    <Text>{"\n\n\n"}</Text>
                    <Text style={styles.title}>{props.navigation.getParam('title')} {"\n"}</Text>
                    <Image style={styles.image} source={props.navigation.getParam('imageSource')}/>
                        <View style={styles.viewStyle1}>
                        <Text>{"\n"}</Text>
                        
                        <Text style={styles.textStyle}>{props.navigation.getParam('description')} {"\n"}</Text>
                        <Text style={styles.textStyle}> ${props.navigation.getParam('price')}</Text>    
                        </View>
                
                    </View>
             
                </View>
    );
}

const styles = StyleSheet.create({
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
    },
    viewStyle:{
      flexDirection: "column",
        alignContent: "space-around",
      alignItems: "center", 
      
    },
    viewStyle1:{
        flexDirection: "column",
        justifyContent:"center",
        
    },
    image:{
        width : 125,
        height: 125,
    
    },
    title:{
        fontWeight: "bold",
        fontSize: 30,
    },
    textStyle:{
        flexDirection: "row",
        flexShrink: 1,
        fontSize:20,
        alignSelf: "center"
        
        
    }

});


export default ItemDetail;