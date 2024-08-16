import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import './gesture-handler';
import HomePage from './screens/homePage';
import CategoryOverview from './screens/categoryOverview';
import CategoryManage from './screens/categoryScreens/CategoryManage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VehicleManage from './screens/vehicleScreens/vehicleManage';
import UpdateVehicle from './screens/vehicleScreens/updateVehicle';

export default function App() {

  const Drawer = createDrawerNavigator();
  // const Tab = createMaterialBottomTabNavigator();

  // function MyTabs() {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen name="CategoryManage" component={CategoryManage} />
  //     </Tab.Navigator>
  //   );
  // }

  const DrawerContainer = () => {
    return (
      <Drawer.Navigator initialRouteName='HomePage'>
        <Drawer.Screen name='Home Page' component={HomePage} />
        <Drawer.Screen name='Categories' component={CategoryOverview} />
      </Drawer.Navigator>
    )
  }
  
  const StackContainer = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator initialRouteName="DrawerContainer" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerContainer" component={DrawerContainer} />
        <Stack.Screen name="VehicleManage" component={VehicleManage} />
        <Stack.Screen name="UpdateVehicle" component={UpdateVehicle} />
        {/* <Stack.Screen name="AddOrUpdateVehicle" component={AddOrUpdateVehicle}></Stack.Screen> */}
      </Stack.Navigator>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackContainer />
      </NavigationContainer>
    </Provider>
  );
};



