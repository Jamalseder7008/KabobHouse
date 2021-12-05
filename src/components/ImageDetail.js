
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
                    <Text style={styles.textStyle}>{props.title} </Text>
                     
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
      padding: 20,
      
      margin: 5,
        
       
    },
    viewStyle1:{
        
        flexShrink:1,
        justifyContent: "center",
        
    },
    image:{
        width : 100,
        height: 100,
        marginRight: 20,
        backgroundColor: 'grey'
    
    },
    textStyle:{
        
        flexShrink: 1,
        alignSelf:"center",
        fontSize:20,
        fontWeight:"bold",
        
        flexWrap:"wrap"
        
        
    }

});


export default ImageDetail;