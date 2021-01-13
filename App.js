
import React from 'react';
import {  Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import Fb from "./screens/Fb"
import In from "./screens/In"

export default function App() {
  return (
      <AppContainer/>
  );
}

const tabs = createBottomTabNavigator({
  FbScreen : {screen:Fb},
  InstaScreen : {screen:In}
})

const AppContainer = createAppContainer(tabs)
