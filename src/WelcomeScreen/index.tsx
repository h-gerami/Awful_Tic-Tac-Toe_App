import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {NavigationSwitchProp} from 'react-navigation';
import {TCFont, TColor, wp} from '../styles/CustomStyle';

export default function WelcomeScreen({
  navigation,
}: {
  navigation: NavigationSwitchProp;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Tic Tac Toe :)</Text>
      <Image
        source={require('../../assets/images/welcome.gif')}
        style={styles.welcomeGif}
      />
      <TouchableOpacity
        style={styles.touchToStartButton}
        onPress={() => navigation.navigate('Game')}>
        <Text style={styles.instructions}>Touch here to start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp(10),
  },
  touchToStartButton: {
    borderRadius: wp(5),
    backgroundColor: TColor.blue,
    padding: wp(5),
    alignSelf: 'stretch',
  },
  welcomeGif: {
    width: wp(70),
    height: wp(70),
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: wp(10),
    textAlign: 'center',
    fontFamily: TCFont.medium,
    lineHeight: wp(20),
    color: TColor.blue,
  },
  instructions: {
    fontSize: wp(5),
    color: TColor.white,
    textAlign: 'center',
    fontFamily: TCFont.medium,
  },
});
