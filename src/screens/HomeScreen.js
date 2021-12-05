import React, {useState} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import BottomNav from "../components/BottomNav";
import ImageDetail from "../components/ImageDetail";
import { SliderBox } from "react-native-image-slider-box";
import { useContext } from "../context/PlatesContext";
import { render } from "react-dom";


const HomeScreen = (props) => {
  const [active, setState] = useState(0);
  const change =({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== active){
      setState(slide);
    }
  }
  const { width } = Dimensions.get("window");
  const height = width*.7; //60%
  const images = [
    require('../../assets/Chickenshawplate.jpg'),
    require('../../assets/beefshawplate.jpg'),
    require('../../assets/Hummus.jpg'),
    require('../../assets/lambkabob.jpg'),
    require('../../assets/chickentekka.jpg'),
  ]
  return <View style={styles.backGround}>
    <View style={styles.container1}>
      <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.gif')} />
    </View>
      <View style={{ width, height}}>
        <ScrollView 
          pagingEnabled 
          horizontal 
          onScroll={change}
          showsHorizontalScrollIndicator={false}
          style={{width, height}}>
          {
            images.map((image, index) => (
              <Image 
                key={index}
                source={image}
                style={{width, height, resizeMode: 'cover'}}/>
            ))
          }
          </ScrollView>
        
      <View style={{flexDirection:'row', position:"absolute", bottom:0,alignSelf:"center"}}>
        {images.map((i, k) => (
          <Text style={{color: 'white', fontSize:25}} key={k} style={k==active ? styles.pagingActiveText : styles.pagingText}>◆</Text>
        ))
        }
        
      </View>
      </View>
    {/* <View style={styles.container1}>
      <Image source={require('../../assets/KabobHouseLogo.gif')} style={{width:300, height:300}}/>
    </View> */}

    <TouchableOpacity style={styles.container} onPress={() => { props.navigation.navigate("Menu") }}>
      <Text style={styles.text}>FULL MENU </Text>
    </TouchableOpacity>

  </View>
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#ffffff',
  },
  pagingText:{
    color: '#888',
    margin: 3,
    fontSize: 25
  },
  pagingActiveText:{
    color: '#fff',
    margin:3,
    fontSize: 25
  },

  container1: {

    alignItems: "center"
  },
  logostyle: {
    width: 250,
    height: 250
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