/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: Home
});

export default createAppContainer(InitialNavigator);

