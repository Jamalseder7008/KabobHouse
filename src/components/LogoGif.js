import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Spacer from './Spacer';

const LogoGif = (props) => {
    return <Spacer>
        <View style={styles.container1}>
      <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.gif')} />
    </View>
    </Spacer>
}

const styles=StyleSheet.create({
  container1: {

    alignItems: "center"
  },
  logostyle: {
    width: 250,
    height: 250
  },
})

export default LogoGif;