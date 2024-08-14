import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import CategoryManage from "./categoryScreens/CategoryManage";
import VehicleManage from "./vehicleScreens/vehicleManage";
import Home from "./home";
import React, { useState } from "react";
import { Button, Modal } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCheckTrueAdminMutation } from "../APIs/accountAPI";
import { useNavigation } from "@react-navigation/native";
import AddOrUpdateVehicle from "./vehicleScreens/addOrUpdateVehicle";

function HomePage() {

    const Tab = createMaterialBottomTabNavigator();
    const [visibleModal, setVisibleModal] = useState(false);
    const [CheckTrueAdmin] = useCheckTrueAdminMutation();
    const [checkUser, setCheckUser] = useState(false);
    const navigation = useNavigation();
    const [userModel, setUserModel] = useState({
        email: "",
        password: ""
    });
    const handleModalButtonClick = () => {
        console.log("trigger handleCategoryClick")
        setVisibleModal(true);
    }

    const checkRoleButtonClickHandler = async () => {
        const loginModel = {
            email: userModel.email,
            password: userModel.password
        }
        // var checkResult = CheckTrueAdmin(loginModel)
        // CheckTrueAdmin(loginModel).then((value) => setCheckUser(value.data))
        const checkResult = await CheckTrueAdmin(loginModel)
        const isUserAuthorized = checkResult.data;
        if (!isUserAuthorized) {
            navigation.navigate("Home")
            Alert.alert("You cannot entry this page. UNAUTHORIZED!")
        }
        setCheckUser(false);
        setVisibleModal(false);
    }

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setUserModel((currentInputValue) => {
            return {
                ...currentInputValue,
                [inputIdentifier]: enteredValue
            }
        })
        console.log("userModel.email")
        console.log(userModel.email)
    }

    const goToPreviousPage = () => {
        navigation.navigate("Home")
        setVisibleModal(false);
    }

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="home" size={20} />
                    )
                }} />
                <Tab.Screen name="CategoryManage" component={CategoryManage} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        handleModalButtonClick();
                    }
                })} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="albums" size={20} />
                    )
                }} />
                {/* <Tab.Screen name="AddOrUpdateVehicle" component={AddOrUpdateVehicle} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        handleModalButtonClick();
                    }
                })} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="car-sport" size={20} />
                    )
                }} /> */}
                <Tab.Screen name="VehicleManage" component={VehicleManage} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        handleModalButtonClick();
                    }
                })} options={{
                    tabBarIcon: ({ }) => (
                        <Ionicons name="car-sport" size={20} />
                    )
                }} />
            </Tab.Navigator>
            <Modal visible={visibleModal} animationType="slide" contentContainerStyle={styles.modalContainer} >
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Enter Your Email" placeholderTextColor="gray" style={styles.input} onChangeText={inputChangeHandler.bind(this, 'email')} />
                    <TextInput placeholder="Enter Your Password" placeholderTextColor="gray" style={styles.input} onChangeText={inputChangeHandler.bind(this, 'password')} secureTextEntry />
                </View>
                <Button mode="contained-tonal" onPress={checkRoleButtonClickHandler} style={styles.modalButton} >
                    <Text>Check Role</Text>
                </Button>
                <Button mode="contained-tonal" onPress={goToPreviousPage} style={styles.modalButton} >
                    <Text>Go To Previous Page</Text>
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
        shadowColor: 'black',
        shadowOffset: 500
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
