import React from "react";
import {Text, StyleSheet, View, FlatList,Button} from "react-native";
import ImageDetail from "../components/ImageDetail";
const ImageScreen = () => {
    return (
        <View>
            
            <ImageDetail title="Logo " imageSource={require('../../assets/KabobHouseLogo.jpg')}/>
            <Text>Welcome to Kabob House Photos!</Text>            
            <ImageDetail title="Chicken Shawarma Plate " imageSource={require('../../assets/Chickenshawplate.jpg')} price={"($17.00)"}/>
            <ImageDetail title="Lamb Kabob Plate " imageSource={require('../../assets/lambkabob.jpg')} price={"($22.00)"}/>
            <ImageDetail title="Gyro Plate "imageSource={require('../../assets/gyroplate.jpg')} price={"($17.00)"}/>

        </View>
        
    );
}

const styles = StyleSheet.create({});

export default ImageScreen