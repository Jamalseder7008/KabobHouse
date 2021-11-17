import React from "react";
import {Text, StyleSheet, View, FlatList, Button} from "react-native";

const Components = () => {


  // TODO 0: Add kabob house logo at the top of the screen

  // TODO 1: Implement Google maps AI and allow for the viewing of kabob house 4301 Veterans blvd metairie, LA 70065

  // TODO 2: Add store hours 10AM-9PM

    return <Text style={styles.text}>KABOB HOUSE {"\n\n"}
    View the map</Text>;
  };
  
  const styles = StyleSheet.create({

    // TODO 0: put logo at top in center

    // TODO 1: put the word Navigation or Map under the LOGO with BOLD letters

    // TODO 2: ensure Google maps is not too big or too small on screen make it fit

    // TODO 3: add hours at the bottom of the screen easy for people to read
    
    text: {
      fontSize: 30
    }
  });

export default Components;