import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, StyleSheet, TextInput } from "react-native";
import CategoryManage from "./categoryScreens/CategoryManage";
import VehicleManage from "./vehicleScreens/vehicleManage";
import Home from "./home";
import { useState } from "react";
import { Button, Modal } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomePage() {

    const Tab = createMaterialBottomTabNavigator();
    const [visibleModal, setVisibleModal] = useState(false);
    const [userModel, setUserModel] = useState({
        email: "",
        password: ""
    });
    const handleCategoryClick = () => {
        console.log("trigger handleCategoryClick")
        setVisibleModal(true);
    }

    const removeModalClick = () => {
        setVisibleModal(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="CategoryManage" component={CategoryManage} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        handleCategoryClick();
                    }
                })} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="albums"></Ionicons>
                    )
                }} />
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="home"></Ionicons>
                    )
                }} />
                <Tab.Screen name="VehicleManage" component={VehicleManage} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="car-sport"></Ionicons>
                    )
                }} />
            </Tab.Navigator>
            <Modal visible={visibleModal} onRequestClose={removeModalClick} animationType="slide" >
                <View style={styles.viewStyleOne}>
                    <View style={styles.viewStyleTwo}>
                        <TextInput placeholder="Enter Your Email" placeholderTextColor={styles.placeholderTextStyle}></TextInput>
                    </View>
                    <View style={styles.viewStyleTwo}>
                        <TextInput placeholder="Enter Your Password" placeholderTextColor={styles.placeholderTextStyle}></TextInput>
                    </View>
                </View>
                <Button onPress={removeModalClick} title='Close Modal' style={{ width: 40, backgroundColor: "pink" }}></Button>
            </Modal>
        </View>
    );
}

export default HomePage
const styles = StyleSheet.create({
    viewStyleOne: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    viewStyleTwo: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 20
    },
    placeholderTextStyle: {
        color: "black"
    }
})