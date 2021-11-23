import React from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import ItemDetail from "../components/ItemDetail";

const InnerMenu = (props) => {
    return (
        <View style={styles.backGround}>
            <ScrollView>
                <View>
                    
                    <View style={styles.viewStyle}>
                    <Text>{"\n\n\n"}</Text>
                    <Text style={styles.title}>{props.navigation.getParam('title')} {"\n"}</Text>
                    <Image style={styles.image} source={props.navigation.getParam('imageSource')}/>
                        <View style={styles.viewStyle1}>
                        <Text>{"\n"}</Text>
                        
                        <Text style={styles.textStyle}>{props.navigation.getParam('description')} {"\n"}</Text>
                        <Text style={styles.textStyle}> ${props.navigation.getParam('price')}</Text>    
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
    viewStyle:{
        flexDirection: "column",
          alignContent: "space-around",
        alignItems: "center", 
      },
      viewStyle1:{
          flexDirection: "column",
          alignContent: "space-around",
          alignItems:"center",
      },
      image:{
          width : 150,
          height: 150,
      
      },
      title:{
          fontWeight: "bold",
          fontSize: 25,
      },
      textStyle:{
          flexDirection: "row",
          flexShrink: 1,
          
          fontSize:18,
          
          
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

export default InnerMenu;