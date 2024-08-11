import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, StyleSheet, TextInput } from "react-native";
import CategoryManage from "./categoryScreens/CategoryManage";
import VehicleManage from "./vehicleScreens/vehicleManage";
import Home from "./home";
import React, { useState } from "react";
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
                        <Ionicons name="albums" size={20} />
                    )
                }} />
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="home" size={20} />
                    )
                }} />
                <Tab.Screen name="VehicleManage" component={VehicleManage} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="car-sport" size={20} />
                    )
                }} />
            </Tab.Navigator>
            <Modal visible={visibleModal} onDismiss={removeModalClick} animationType="slide" contentContainerStyle={styles.modalContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Enter Your Email" placeholderTextColor="gray" style={styles.input} />
                    <TextInput placeholder="Enter Your Password" placeholderTextColor="gray" style={styles.input} secureTextEntry />
                </View>
                <Button mode="contained-tonal" onPress={removeModalClick} style={styles.modalButton} >
                    <Text>Close Modal</Text>
                </Button>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '100%',
    },
    modalButton: {
        marginTop: 20,
        backgroundColor: "pink"
    },
});

export default HomePage;
