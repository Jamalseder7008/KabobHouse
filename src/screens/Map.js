import React from "react";
import {TouchableOpacity, Linking, Text, StyleSheet, View, FlatList, Button, Image} from "react-native";
import LogoGif from "../components/LogoGif";


const Components = () => {


  // TODO 0: Add kabob house logo at the top of the screen

  // TODO 1: Implement Google maps AI and allow for the viewing of kabob house 4301 Veterans blvd metairie, LA 70065

  // TODO 2: Add store hours 10AM-9PM

    return(
      <View style={styles.backGround}>
        <LogoGif />
          <View style={styles.mapBox}>
            <TouchableOpacity onPress = { () => Linking.openURL("https://www.google.com/maps/dir//kabob+house/")}>
              <Image style={styles.maps} source={require('../../assets/KabobHouseMap.jpg')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
              <Text style={styles.text}>Open Everyday 9AM - 10PM</Text>
          </View>
          <View style={styles.container3}>
              <Text style={styles.address}>4301 Veterans Memorial Blvd{"\n"}Metairie, LA 70006</Text>
          </View>
          
      </View>    
    )
  };
  
  const styles = StyleSheet.create({

    map:{width:300, height:300},
    text: {
      fontSize: 30
    },
    backGround:{
      backgroundColor: '#ffffff',
      overflow: 'scroll',
      flex:1
  },
    container1: {

      alignItems: "center"
    },
    logostyle: {
      width: 200,
      height: 200,
    },
    maps: {
      width:300,
      height:300,
      borderWidth: 10,
      borderRadius: 6,
      borderColor: "#20232a",
    },
    mapBox: {

      alignItems: "center"
    },
    container2: {
      backgroundColor: '#b12135',
      margin: 40,
      borderRadius:0,
      justifyContent: 'center',
      alignItems: 'center',

  
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      color: '#fff',
      textShadowColor: '#fff',
      textShadowRadius: 0
    },
    container3: {
      backgroundColor: '#b12135',
      margin: 40,
      borderRadius:0,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
  
    },
    address: {
      fontSize: 16,
      textAlign: 'center',
      color: '#fff',
      textShadowColor: '#fff',
      textShadowRadius: 0
    },
  });

export default Components;
