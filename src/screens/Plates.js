import React, { useState } from "react";
import {Text, StyleSheet, View, FlatList,Button, ScrollView, Image, TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";

// var  = {:"Chicken Shawarma Plate", "shave cut marinated Chicken", require('../../assets/Chickenshawplate.jpg'), 17],
// "Beef Shawarma Plate", "tender thin cut Beef",require('../../assets/beefplate.jpg'), 18],
// title:"Gyro Plate", "Lamb and Beef thin cut mix",require('../../assets/gyroplate.jpg'), 17],
// title:"Falafel Plate", "8 piece fried chick pea bites",require('../../assets/falafelplate.jpg'), 15],
// "Chicken Kabob Plate", "Grilled Chicken breast chunks", require('../../assets/ChickenKabob.jpg'), 19],
// :"Lamb Kabob Plate", "Grilled Tender Lamb chunks", require('../../assets/lambkabob.jpg'), 22],
// "Kufta Kabob Plate", "Grilled Ground Beef and Lamb mix", 19],
// title:"Kabob Kombo", "Grilled Lamb, Kufta, and Chicken Kabob", 25],
// title:"Shawarma Kombo", "Chicken, Beef, or Gyro shawarma", 22],
// "Lamb Chops Plate", "Fire-Grilled garlic marinated rib cuts", 34],
//:"Shrimp Sauteed Plate", "Sauteed shrimp and veggies", 25],
// :"Chicken Tekka Plate", "Fire-Grilled half chicken", require('../../assets/chickentekka.jpg'), 19],
// :"Veggie Sauteed Plate", "Sauteed onions, peppers, zucchini, and carrots", 12]};

const Plates = (props) => {
    const[Plate, setPlate] = useState([
        {title:"Chicken Shawarma Plate",description: "shave cut marinated Chicken", imageSource: require('../../assets/Chickenshawplate.jpg'), price: 17},
        {title:"Beef Shawarma Plate", description: "tender thin cut Beef",imageSource: require('../../assets/beefplate.jpg'), price: 18},
        {title:"Gyro Plate", description: "Lamb and Beef thin cut mix", imageSource: require('../../assets/gyroplate.jpg'), price: 17},
        {title:"Falafel Plate", description: "8 piece fried chick pea bites", imageSource: require('../../assets/falafelplate.jpg'),price: 15},
        {title:"Chicken Kabob Plate", description: "Grilled Chicken breast chunks", imageSource: require('../../assets/ChickenKabob.jpg'),price: 19},
        {title:"Lamb Kabob Plate", description: "Grilled Tender Lamb chunks", imageSource: require('../../assets/lambkabob.jpg'), price: 22},
        {title:"Kufta Kabob Plate", description: "Grilled Ground Beef and Lamb mix", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 19},
        {title:"Kabob Kombo", description:"Grilled Lamb, Kufta, and Chicken Kabob", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 25},
        {title:"Shawarma Kombo", description:"Chicken, Beef, or Gyro shawarma", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 22},
        {title:"Lamb Chops Plate",description: "Fire-Grilled garlic marinated rib cuts", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 34},
        {title:"Shrimp Sauteed Plate", description:"Sauteed shrimp and veggies", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 25},
        {title:"Chicken Tekka Plate", description:"Fire-Grilled half chicken", imageSource:require('../../assets/chickentekka.jpg'), price: 19},
        {title:"Veggie Sauteed Plate", description: "Sauteed onions, peppers, zucchini, and carrots", imageSource:require('../../assets/KabobHouseLogo.jpg'), price: 12}
    ]);
    
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
                        data={Plate}
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