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
import ItemsList from './src/screens/ItemsList';
import Login from './src/screens/Login';
import Contact from './src/screens/Contact';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Details from './src/screens/Details';
import Register from './src/screens/Register';
import UploadImage from './src/screens/UploadImage';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: Login,
  ItemsList: ItemsList,
  Details: Details,
  RegisterScreen:Register,
  Contact: Contact,
  UploadImage: UploadImage
});

export default createAppContainer(InitialNavigator);
