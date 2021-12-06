import React from "react";
import {Text, StyleSheet, Linking, TouchableOpacity, View, FlatList, Button, Image} from "react-native";
import { Link } from "react-router-dom";


const Components = () => {


  // TODO 0: Add kabob house logo at the top of the screen

  // TODO 1: Implement Google maps AI and allow for the viewing of kabob house 4301 Veterans blvd metairie, LA 70065

  // TODO 2: Add store hours 10AM-9PM

    return<View>
    <Text style={styles.text}>KABOB HOUSE {"\n\n"}
    View the map</Text>;
    <TouchableOpacity onPress={()=> Linking("https://www.google.com/maps/dir//kabob+house/")} >
      <Image style={styles.map} source={require("../../assets/KabobHouseMap.jpg")}/>
    </TouchableOpacity>
    </View> 
  };
  
  const styles = StyleSheet.create({

    // TODO 0: put logo at top in center

    // TODO 1: put the word Navigation or Map under the LOGO with BOLD letters

    // TODO 2: ensure Google maps is not too big or too small on screen make it fit

    // TODO 3: add hours at the bottom of the screen easy for people to read
    map:{width:300, height:300},
    text: {
      fontSize: 30
    }
  });

export default Components;