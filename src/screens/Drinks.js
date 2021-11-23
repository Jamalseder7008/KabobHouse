import React, { useState } from "react";
import {Text, StyleSheet, View, FlatList,Button, Image, ScrollView, Touchable} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageDetail from "../components/ImageDetail";



const Drinks = (props) => {
    const [Drink, setPrices] = useState([
        {title: "Lemonade Mint Slush",  description: "blended lemonade, ice, and mint", imageSource: require('../../assets/mintlemonade.jpg'), price: 4},
        {title: "Lebaneze Iced Tea", description: "Sweet tea with rose water", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 3},
        {title: "Water", description: "Water bottle(ozarka)", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 1.50},
        {title: "Fountain Drink",description: "20oz fountain drink",imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 2.75},
        {title: "Yogurt drink",description: "Ayran-Shaneenah-yogurt drink", imageSource: require('../../assets/yogurtdrink.jpg'), price:4},
    ]);

    return (
        <View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                    {/* <Text style={styles.title}>Drinks{"\n"}</Text>     
                    <ImageDetail title={Drink.LMS[0]} description={Drink.LMS[1]} imageSource={Drink.LMS[2]} price={Drink.LMS[3]}/>
                    <ImageDetail title={Drink.LIT[0]} description={Drink.LIT[1]} imageSource={} price={Drink.LIT[2]}/>
                    <ImageDetail title={Drink.Water[0]} description={Drink.Water[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Drink.Water[2]}/>
                    <ImageDetail title={Drink.FD[0]} description={Drink.FD[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Drink.FD[2]}/>
                    <ImageDetail title={Drink.YD[0]} description={Drink.YD[1]} imageSource={Drink.YD[2]} price={Drink.YD[3]}/> */}
                    <FlatList
                        data={Drink}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenu', item)}>
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
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    backGround:{
        backgroundColor: '#ffffff',
        overflow: 'scroll'
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

export default Drinks;