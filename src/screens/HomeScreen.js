import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Flatlist, AppRegistry } from "react-native";
import ImageDetail from "../components/ImageDetail";


const HomeScreen = (props) => {
  
  return <View>
  <ImageDetail style={styles.container} imageSource={require('../../assets/KabobHouseLogo.jpg')}/>
    <Text style={styles.text}>KABOB HOUSE </Text>
    <TouchableOpacity onPress={() => { props.navigation.navigate("Image")}}>
      <Text style={styles.text2}>FULL MENU </Text> 
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {props.navigation.navigate("Image")}}>
      <Text style={styles.text3}>APPETIZERS </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {props.navigation.navigate("Image")}}>
      <Text style={styles.text}>PLATES </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {props.navigation.navigate("Image")}}>
      <Text style={styles.text2}>DRINKS </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {props.navigation.navigate("Image")}}>
      <Text style={styles.text3}>DESSERTS </Text>
    </TouchableOpacity>
    <Button 
      onPress={function(){ props.navigation.navigate("Cart")}}
      title={"PHONE"}
    />
    <Button 
      onPress={function(){ props.navigation.navigate("Cart")}}
      title={"CART"}
    />
    <Button 
      onPress={function(){ props.navigation.navigate("Map")}}
      title={"MAP"}
    />

  </View>
};

const styles = StyleSheet.create({
  
  text: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#007A3D',
    textShadowColor: '#fff',
    textShadowRadius: 20
  },
  text2: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#007A3D',
    color: '#CE1126',
    textShadowColor: '#fff',
    textShadowRadius: 20
   },
   text3: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#007A3D',
    color: '#fff',
    textShadowColor: '#fff',
    textShadowRadius: 20
   },
   container: {
    justifyContent: 'center',
    alignItems: 'center'
    },
   logo:   {
        width: 300,
        height: 400
    }
});

export default HomeScreen;
