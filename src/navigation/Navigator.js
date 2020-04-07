import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import PerfilScreen from '../pages/PerfilScreen';

const MainTab = createBottomTabNavigator();
export const RootStack = createStackNavigator();

function MainTabScreen() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Details" component={PerfilScreen} />
    </MainTab.Navigator>
  );
}

export default function Navigator() {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={LoginScreen} />

      <RootStack.Screen name="Main" component={MainTabScreen} />
    </RootStack.Navigator>
  );
}
