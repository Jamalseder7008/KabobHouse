import React, { useContext } from "react";
import { StyleSheet,Text,TouchableOpacity, View, Image } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import Logo from "../components/Logo";

//allow people to edit password and logout.
const AccountScreen =() => {
    const {state, signout} = useContext(AuthContext);
    return<View>
        <Spacer/>
        <Logo />
        <Spacer>
            <Text style={styles.text1}>AccountScreen</Text>
        </Spacer>
        <Spacer>
            
        <TouchableOpacity style={styles.container} onPress={() => {signout()}}>
                <Text style={styles.text}>Sign Out</Text>
            </TouchableOpacity> 
        </Spacer>
        <View style={styles.container1}>
            <Image style={styles.image} source={require("../../assets/TheEnd.gif")}/>
        </View>
    </View>
    
}

const styles=StyleSheet.create({
    text1:{
        fontSize: 30,
        textAlign: "center",
        color: "#008800"   

    },
    container: {
        backgroundColor: '#b12135',
        margin: 5,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        padding:3,
      },
      text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: '#888',
        textShadowRadius: 20
      },
      container1: {
        alignItems: "center"
      },
      image: {
        width:300,
        height:300
      },
});

export default AccountScreen;