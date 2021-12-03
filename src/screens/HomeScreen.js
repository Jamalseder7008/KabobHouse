import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, Flatlist, AppRegistry, Linking } from "react-native";
import BottomNav from "../components/BottomNav";
import ImageDetail from "../components/ImageDetail";


const HomeScreen = (props) => {

  return <View style={styles.backGround}>
    <View style={styles.container1}>
      <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')} />
    </View>
    
    <TouchableOpacity style={styles.container} onPress={() => { props.navigation.navigate("Menu") }}>
      <Text style={styles.text}>FULL MENU </Text>
    </TouchableOpacity>
    

    <BottomNav navigation={props.navigation}/>

  </View>
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#ffffff',
  },
  container1: {

    alignItems: "center"
  },
  logostyle: {
    width: 150,
    height: 150
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#fff',
    textShadowRadius: 20
  },

  container: {
    backgroundColor: '#b12135',
    margin: 5,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default HomeScreen;