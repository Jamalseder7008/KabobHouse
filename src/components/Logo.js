import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Spacer from './Spacer';

const Logo = (props) => {
    return <Spacer>
        <View style={styles.container1}>
      <Image style={styles.logostyle} source={require('../../assets/KabobHouseLogo.png')} />
    </View>
    </Spacer>
}

const styles=StyleSheet.create({
  container1: {

    alignItems: "center"
  },
  logostyle: {
    width: 150,
    height: 150
  },
})

export default Logo;