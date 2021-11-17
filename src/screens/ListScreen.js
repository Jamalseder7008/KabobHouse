import React from "react";
import {Text, StyleSheet, View, FlatList,Button} from "react-native";

const FoodList=[
  {name: "Chicken Kabob Plate"},
  {name: "Lamb Kabob Plate"},
  {name: "Kufta Kabob Plate"},
  {name: "Gyro Plate"},
  {name: "Chicken Shawarma Plate"},
  {name: "Beef Shawarma Plate"}
];


const ListScreen = () => {
    return(
      <FlatList
      horizontal = {false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(plate) => {return plate.name}}
      data={FoodList}
      renderItem={({item}) =>{
        return <Text style={styles.textStyle}>{item.name}</Text>
      }}
      />
    ) 
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      marginVertical: 100
    }
  });

export default ListScreen;