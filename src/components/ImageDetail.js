import React from "react";
import {Text, StyleSheet, View, Image, FlatList,Button} from "react-native";

const ImageDetail = (props) => {

    console.log(props);
    return (
        <View>
            <Image style={styles.image} source={props.imageSource}/>
            <Text>{props.title}{props.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width : 150,
        height:150
    }
});


export default ImageDetail