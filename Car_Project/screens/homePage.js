import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View } from "react-native";
import CategoryManage from "./categoryScreens/CategoryManage";
import VehicleManage from "./vehicleScreens/vehicleManage";
import Home from "./home";
import { useState } from "react";
import { Modal } from "react-native-paper";


function HomePage() {

    const Tab = createMaterialBottomTabNavigator();
    // const [visibleModal, setVisibleModal] = useState(false);
    const handleCategoryClick = () => {
        console.log("trigger handleCategoryClick")
        // setVisibleModal(true);
    }

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="CategoryManage" component={CategoryManage} listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        handleCategoryClick();
                    }
                })} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="VehicleManage" component={VehicleManage} />
            </Tab.Navigator>
            {/* <Modal visible={visibleModal} dismissable={true} animationType="slide" transparent={true}>
                <Text>open this modal?</Text>
            </Modal> */}
        </View>
    );
}

export default HomePage