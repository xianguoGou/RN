import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/HomeScreen';
import SettingsScreen from './src/SettingsScreen';
import DetailsScreen from './src/DetailsScreen';
import MyScreen from './src/MyScreen';
import MallScreen from './src/MallScreen';
import CartScreen from './src/CartScreen';


const BottomNavigator = createBottomTabNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: {
          tabBarLabel: '首页',
          tabBarIcon: ({tintColor, focused}) => (
            <Ionicons name="ios-home" size={25} color={tintColor}></Ionicons>
          )
      }
  },
  Mall: {
      screen: MallScreen,
      navigationOptions: {
          tabBarLabel: '商城',
          tabBarIcon: ({tintColor, focused}) => (
            <Ionicons name="ios-appstore" size={25} color={tintColor}></Ionicons>
          )
      }
  },
  Cart: {
      screen: CartScreen,
      navigationOptions: {
          tabBarLabel: '购物车',
          tabBarIcon: ({tintColor, focused}) => (
            <Ionicons name="ios-cart" size={25} color={tintColor}></Ionicons>
          )
      }
  },
  Mine: {
      screen: MyScreen,
      navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: ({tintColor, focused}) => (
            <Ionicons name="ios-person" size={25} color={tintColor}></Ionicons>
          )
      }
  }
});

//创建全局导航器createStackNavigator
const AppStack = createStackNavigator({
  BottomNavigator:{
    screen : BottomNavigator,
    navigationOptions:{
      header: null, // 在这行设置，没有这行的话默认有导航头的
    }
  },
//全局的stack 
  Details:{
    screen : DetailsScreen,
    navigationOptions:{
      header: null
    }
  },
  // initialRouteName:'BottomNavigator'
})


export default createAppContainer(AppStack)
