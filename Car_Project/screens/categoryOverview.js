import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "./categoryList";
import CategoryItem from "./categoryItem";
import Vehicles from "./vehicleScreens/Vehicles";
import VehicleDetail from "./vehicleScreens/VehicleDetail";
import Temp from "./vehicleScreens/Temp";

export default function CategoryOverview() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name='Category List' component={CategoryList}></Stack.Screen>
            <Stack.Screen name='Vehicles' component={Vehicles}></Stack.Screen>
            <Stack.Screen name='Vehicle Detail' component={VehicleDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}