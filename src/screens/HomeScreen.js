import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  

  return <View>
    <Text style={styles.text}>KABOB HOUSE {"\n\n"}
      View the menu{"\n\n"} View the map</Text>
    <TouchableOpacity onPress={() => { props.navigation.navigate("Components")}}>
      <Text>ComponentsScreen</Text> 
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {props.navigation.navigate("List")}}>
      <Text>ListScreen</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {props.navigation.navigate("Image")}}>
      <Text>Image Screen</Text>
    </TouchableOpacity>
    <Button 
      onPress={function(){ props.navigation.navigate("Cart")}}
      title={"Cart"}
    />
    <Button 
      onPress={function(){ props.navigation.navigate("Menu")}}
      title={"Menu"}
    />
  </View>
};

const styles = StyleSheet.create({
  
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
