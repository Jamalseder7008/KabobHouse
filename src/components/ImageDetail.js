import React from "react";
import {Text, StyleSheet, View, Image, FlatList,Button} from "react-native";

//TODO: fix photo and text alignment
const ImageDetail = (props) => {

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
      flexDirection: "row",
      paddingTop: 20,
      paddingLeft: 20,
    
        alignContent: "space-around",
      alignItems: "stretch", 
    },
    viewStyle1:{
        flexDirection: "column",
        alignContent: "center",
        alignItems:"center",
    },
    image:{
        width : 100,
        height: 100,
    
    },
    textStyle:{
        flexDirection: "row",
        flexShrink: 1,
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        fontSize:30,
        
        
    }

});


export default ImageDetail;