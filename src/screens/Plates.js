import React from "react";
import {Text, StyleSheet, View, FlatList,Button, ScrollView, Image} from "react-native";
import ImageDetail from "../components/ImageDetail";

var Plate = {CSP: ["Chicken Shawarma Plate", "shave cut marinated Chicken served with rice,hummus,salad,and,bread", 17],
BSP: ["Beef Shawarma, Plate", "tender thin cut Beef served with rice, hummus, salad, and bread", 18],
GP: ["Gyro Plate", "Lamb and Beef thin cut mix served with rice, hummus, salad, and bread", 17],
FP: ["Falafel Plate", "8 piece fried chick pea bites served with rice, hummus, salad, and bread", 15],
CKP: ["Chicken Kabob Plate", "Grilled Chicken breast chunks served with rice, hummus, salad, and bread", 19],
LKP: ["Lamb Kabob Plate", "Grilled Tender Lamb chunks served with rice, hummus, salad, and bread", 22],
KKP: ["Kufta Kabob Plate", "Grilled Ground Beef and Lamb mix served with rice, hummus, salad, and bread", 19],
KK: ["Kabob Kombo", "Grilled Lamb Kufta and Chicken Kabob served with rice, hummus, salad, and bread", 25],
SK: ["Shawarma Kombo", "Chicken Beef or Gyro shawarma served with rice, hummus, salad, and bread", 22],
LCP: ["Lamb Chops Plate", "Fire-Grilled garlic marinated rib cuts served with rice, hummus, salad, and bread", 34],
SSP: ["Shrimp Sauteed Plate", "Sauteed shrimp and veggies served with rice, hummus, salad,and bread", 25],
CTP: ["Chicken Tekka Plate", "Fire-Grilled half chicken served with rice, hummus, salad, and bread", 19],
VSP: ["Veggie Sauteed Plate", "Sauteed onions-pepper-zucchini-carrots served with rice, hummus, salad, and bread", 12]}

const Plates = () => {
    return (<View>
            <ScrollView>
                <View style={styles.backGround}>
                    <View style={styles.container}>
                        <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')}/>
                    </View>
                    <Text style={styles.title}>Appetizers{"\n"}</Text>    
                    <View style={styles.container1}>
                        <ImageDetail title={Plate.CSP[0]} description={Plate.CSP[1]} imageSource={require('../../assets/Chickenshawplate.jpg')} price={Plate.CSP[2]}/>
                        <ImageDetail title={Plate.BSP[0]} description={Plate.BSP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.BSP[2]}/>
                        <ImageDetail title={Plate.GP[0]}  description={Plate.GP[1]}  imageSource={require('../../assets/gyroplate.jpg')}      price={Plate.GP[2]}/>
                        <ImageDetail title={Plate.FP[0]}  description={Plate.FP[1]}  imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.FP[2]}/>
                        <ImageDetail title={Plate.CKP[0]} description={Plate.CKP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.CKP[2]}/>
                        <ImageDetail title={Plate.LKP[0]} description={Plate.LKP[1]} imageSource={require('../../assets/lambkabob.jpg')}      price={Plate.LKP[2]}/>
                        <ImageDetail title={Plate.KKP[0]} description={Plate.KKP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.KKP[2]}/>
                        <ImageDetail title={Plate.KK[0]}  description={Plate.KK[1]}  imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.KK[2]}/>
                        <ImageDetail title={Plate.SK[0]}  description={Plate.SK[1]}  imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.SK[2]}/>
                        <ImageDetail title={Plate.LCP[0]} description={Plate.LCP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.LCP[2]}/>
                        <ImageDetail title={Plate.SSP[0]} description={Plate.SSP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.SSP[2]}/>
                        <ImageDetail title={Plate.CTP[0]} description={Plate.CTP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.CTP[2]}/>
                        <ImageDetail title={Plate.VSP[0]} description={Plate.VSP[1]} imageSource={require('../../assets/KabobHouseLogo.jpg')} price={Plate.VSP[2]}/>


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
    }
});

export default Plates;