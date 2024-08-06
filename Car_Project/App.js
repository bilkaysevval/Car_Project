import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import './gesture-handler';
import HomePage from './screens/homePage';
import CategoryOverview from './screens/categoryOverview';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='HomePage'>
          <Drawer.Screen name='Home Page' component={HomePage}></Drawer.Screen>
          <Drawer.Screen name='Categories' component={CategoryOverview}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};



