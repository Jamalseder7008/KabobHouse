import React, { useState, useContext } from "react";
import {Text, StyleSheet, View, FlatList,Button, ScrollView, Image, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";
import {Context as PlatesContext} from "../context/PlatesContext"

const Plates = (props) => {

    const{state, loadPlates} = useContext(PlatesContext);
    return (
    <View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                    <Text style={styles.title}>Plates</Text>    
                    <Text style={styles.subtitle}>Served with Rice, Hummus, and Salad{"\n"} </Text>
                    <View style={styles.container1}>
                        {/* <ImageDetail title={Plate.CSP[0]} description={Plate.CSP[1]} imageSource={Plate.CSP[2]} price={Plate.CSP[3]}/>
                        <ImageDetail title={Plate.BSP[0]} description={Plate.BSP[1]} imageSource={Plate.BSP[2]} price={Plate.BSP[3]}/>
                        <ImageDetail title={Plate.GP[0]}  description={Plate.GP[1]}  imageSource={Plate.GP[2]}  price={Plate.GP[3]}/>
                        <ImageDetail title={Plate.FP[0]}  description={Plate.FP[1]}  imageSource={Plate.FP[2]} price={Plate.FP[3]}/>
                        <ImageDetail title={Plate.CKP[0]} description={Plate.CKP[1]} imageSource={Plate.CKP[2]} price={Plate.CKP[3]}/>
                        <ImageDetail title={Plate.LKP[0]} description={Plate.LKP[1]} imageSource={Plate.LKP[2]} price={Plate.LKP[3]}/>
                        <ImageDetail title={Plate.KKP[0]} description={Plate.KKP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.KKP[2]}/>
                        <ImageDetail title={Plate.KK[0]}  description={Plate.KK[1]}  imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.KK[2]}/>
                        <ImageDetail title={Plate.SK[0]}  description={Plate.SK[1]}  imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.SK[2]}/>
                        <ImageDetail title={Plate.LCP[0]} description={Plate.LCP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.LCP[2]}/>
                        <ImageDetail title={Plate.SSP[0]} description={Plate.SSP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.SSP[2]}/>
                        <ImageDetail title={Plate.CTP[0]} description={Plate.CTP[1]} imageSource={Plate.CTP[2]} price={Plate.CTP[3]}/>
                        <ImageDetail title={Plate.VSP[0]} description={Plate.VSP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.VSP[2]}/> */}

                    <FlatList
                        data={state}
                        keyExtractor={(plate) => {return plate.title, plate.id, plate.price}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuPlate', {id:item.id})}>
                                <ImageDetail title={item.title} imageSource={item.imageSource}/>
                                {/* <Text>{item.title}</Text> */}
                            </TouchableOpacity>
                        )}
                        />
                        <View style={styles.BottomNav}>
                            <TouchableOpacity onPress={() => {props.navigation.navigate("Home")}}>
                                <Text>HOME</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {props.navigation.navigate("Phone")}}>
                                <Text>Phone</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {props.navigation.navigate("Menu")}}>
                                <Text>Menu</Text> 
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {props.navigation.navigate("Map")}}>
                                <Text>Map</Text> 
                            </TouchableOpacity>
                
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
    title:{
        textAlign: "center",
        alignContent: "space-around",
        fontSize: 20,
        fontWeight: "bold",
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

export default Plates;