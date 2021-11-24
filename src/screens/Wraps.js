import React, { useContext, useState } from "react";
import {Text, StyleSheet, View, FlatList,Button, Image, ScrollView, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";
import { Context as WrapsContext } from "../context/WrapsContext";

// [Falafel Wrap, Garlic and herb Falafel wrap dressed chefs choice served with seasoned fries, 10],
// [Chicken Shawarma Wrap, Garlic and herb Chicken Shawarma wrap dressed chefs choice served with seasoned fries, 10],
// [Beef Shawarma Wrap, Garlic and herb Beef Shawarma wrap dressed chefs choice served with seasoned fries, 10],
// [Gyro Wrap, Garlic and herb Gyro wrap dressed chefs choice served with seasoned fries, 10],
// [Chicken Kabob Wrap, Garlic and herb Chicken Kabob wrap dressed chefs choice served with seasoned fries, 10],
// [Kufta Kabob Wrap, Garlic and herb Kufta Kabob wrap dressed chefs choice served with seasoned fries, 11],
// [Lamb Kabob Wrap, Garlic and herb Lamb Kabob wrap dressed chefs choice served with seasoned fries, 12],
// [Shrimp Wrap, Garlic and herb Shrimp wrap dressed chefs choice served with seasoned fries, 12],
// [Veggie Wrap, Garlic and herb sauteed veggies wrap dressed chefs choice served with seasoned fries, 9]

const Wraps = (props) => {
    // const [Wrap, setPrices] = useState([
    //     {id: 138, title: "Chicken Shawarma Wrap",  description: "Garlic and herb Chicken Shawarma wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/chickenwrap.jpg'), price: 10},
    //     {id: 139, title: "Falafel Wrap", description: "Garlic and herb Falafel wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price: 10},
    //     {id: 140, title: "Beef Shawarma Wrap", description: "Garlic and herb Beef Shawarma wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/beefwrap.jpg'), price: 10},
    //     {id: 141, title: "Gyro Wrap",description: "Garlic and herb Gyro wrap dressed chefs choice served with seasoned fries",imageSource:require('../../assets/GyroWrap.jpg'), price: 10},
    //     {id: 142, title: "Kufta Kabob Wrap",description: "Garlic and herb Kufta Kabob wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},
    //     {id: 143, title: "Lamb Kabob Wrap",description: "Garlic and herb Lamb Kabob wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},
    //     {id: 144, title: "Shrimp Wrap",description: "Garlic and herb Shrimp Wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},
    //     {id: 145, title: "Veggie Wrap",description: "Garlic and herb sautteed veggies wrap dressed chefs choice served with seasoned fries", imageSource: require('../../assets/KabobHouseLogo.jpg'), price:11},
    // ]);

    const{state, loadWraps} = useContext(WrapsContext);
    return (
        <View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                    <Text style={styles.title}>Wraps{"\n"}</Text>
                    <FlatList
                        data={state}
                        keyExtractor={(wrap) => {return wrap.title,wrap.price, wrap.id}} 
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('InnerMenuWrap', {id:item.id})}>
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

export default Wraps;
