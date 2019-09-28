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
import ItemsList from './src/screens/ItemsList';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Details from './src/screens/Details';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: ItemsList,
  Details: Details,
});

export default createAppContainer(InitialNavigator);
