import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehicleManage from "./vehicleManage";
import AddOrUpdateVehicle from "./addOrUpdateVehicle";
import UpdateVehicle from "./updateVehicle";

function VehicleCRUD() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName="VehicleManage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="VehicleManage" component={VehicleManage}></Stack.Screen>
            <Stack.Screen name="UpdateVehicle" component={UpdateVehicle}></Stack.Screen>
            {/* <Stack.Screen name="AddOrUpdateVehicle" component={AddOrUpdateVehicle}></Stack.Screen> */}
        </Stack.Navigator>
    )
}

export default VehicleCRUD