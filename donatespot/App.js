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
import Login from './src/screens/Login';
import Contact from './src/screens/Contact';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Details from './src/screens/Details';
import Register from './src/screens/Register';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: ItemsList,
  Details: Details,
  LoginScreen: Login,
  RegisterScreen:Register,
  Contact: Contact
});

export default createAppContainer(InitialNavigator);
