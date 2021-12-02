import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, Flatlist, AppRegistry, Linking } from "react-native";
import ImageDetail from "../components/ImageDetail";


const HomeScreen = (props) => {

  return <View style={styles.backGround}>
    <View style={styles.container1}>
      <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.jpg')} />
    </View>
    <Text style={styles.text}>KABOB HOUSE </Text>
    <TouchableOpacity onPress={() => { props.navigation.navigate("Menu") }}>
      <Text style={styles.text2}>FULL MENU </Text>
    </TouchableOpacity>
    {/* Moved these buttons under full menu tab -Jamal 
    <TouchableOpacity onPress={() => {props.navigation.navigate("Appetizers")}}>
      <Text style={styles.text3}>APPETIZERS </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {props.navigation.navigate("Plates")}}>
      <Text style={styles.text}>PLATES </Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress = {() => {props.navigation.navigate("Salads")}}>
      <Text style={styles.text}>SOUPS AND SALADS </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress = {() => {props.navigation.navigate("Drinks")}}>
      <Text style={styles.text2}>DRINKS </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {props.navigation.navigate("Desserts")}}>
      <Text style={styles.text3}>DESSERTS </Text>
    </TouchableOpacity> */}

    <Button
      onPress={() => Linking.openURL(`tel:+1(504)-581-8695`)}
      title={"PHONE"}
    />
    <Button
      onPress={function () { props.navigation.navigate("Cart") }}
      title={"CART"}
    />
    <Button
      onPress={function () { props.navigation.navigate("Map") }}
      title={"MAP"}
    />
    <Button
      onPress={function () { props.navigation.navigate("Login") }}
      title={"Log out"}
    />

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
    alignItems: 'center',

  },
  logo: {
    width: 300,
    height: 400
  }
});

export default HomeScreen;