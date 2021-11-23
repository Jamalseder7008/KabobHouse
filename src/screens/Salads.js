import React from "react";
import {Text, StyleSheet, View, FlatList,Button, ScrollView, Image, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";

var Salad = {
    GreekSalad: ["Greek Salad", "Romaine lettuce, cucumber, onion, olives, tomatoes, bell peppers, feta cheese dressed with lemon, salt, and olive oil dressing",require('../../assets/greeksalad.jpg'), 10],
    ArabicSalad: ["Arabic Salad", "Diced cucumbers, tomato, green onion, parsley dressed with lemon, salt, and olive oil dressing",require('../../assets/arabicsalad.jpg'), 8],
    Tabula: ["Tabouli", "fine chopped parsley, cracked wheat, tomatoes, and cucumber dressed with lemon salt and olive oil dressing", 8],
    KHSS: ["KH Special Salad", "Romaine lettuce, cucumbers, onions, tomatoes, onions, apples, mint, bell peppers, sunflower seeds, and zaatar dressed with lemon, salt, and olive oil dressing", 12],
    LSCup: ["Lentil Soup", "Flavorful lentil, carrot, and onion pureed soup(Cup 8oz)", 5],
    LSBowl: ["Lentil Soup", "Flavorful lentil, carrot, and onion pureed soup(Bowl 12oz)", 7]

};

const Salads = () => {
    return (<View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                    <Text style={styles.title}>Salads{"\n"}</Text>    
                    <View style={styles.container1}>
                    
                        <ImageDetail title={Salad.GreekSalad[0]} description={Salad.GreekSalad[1]} imageSource={Salad.GreekSalad[2]} price={Salad.GreekSalad[3]}/>
                    
                        <ImageDetail title={Salad.ArabicSalad[0]} description={Salad.ArabicSalad[1]} imageSource={Salad.ArabicSalad[2]} price={Salad.ArabicSalad[3]}/>
                        <ImageDetail title={Salad.Tabula[0]}  description={Salad.Tabula[1]}  imageSource={require('../../assets/KabobHouseLogo.jpg')}      price={Salad.Tabula[2]}/>
                        <ImageDetail title={Salad.KHSS[0]}  description={Salad.KHSS[1]}  imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Salad.KHSS[2]}/>
                        <ImageDetail title={Salad.LSCup[0]} description={Salad.LSCup[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Salad.LSCup[2]}/>
                        <ImageDetail title={Salad.LSBowl[0]} description={Salad.LSBowl[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')}      price={Salad.LSBowl[2]}/>
            

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

export default Salads;