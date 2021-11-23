import React from "react";
import {Text, StyleSheet, View, Image, FlatList,Button} from "react-native";


const ItemDetail = (props) => {

    console.log(props);
    return (
        <View style={styles.backGround}>
            <View
                    style={{
                    borderBottomColor: 'black',
                    borderWidth: 2,
                    borderRadius:1,
                    borderStyle: "dashed"
                    
                    }}/>
                    
            <View style={styles.viewStyle}>
            <Text>{"\n\n\n"}</Text>
                <Image style={styles.image} source={props.imageSource}/>
                <View style={styles.viewStyle1}>
                    <Text style={styles.textStyle}>{props.title} {"\n"}</Text>
                    <Text style={styles.textStyle}>{props.description} {"\n"}</Text>
                    <Text style={styles.textStyle}> {props.price}</Text>    
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