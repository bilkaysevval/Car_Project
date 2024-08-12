import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehicleManage from "./vehicleManage";
import Temp from "./Temp";

function VehicleCRUD() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName="VehicleManage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="VehicleManage" component={VehicleManage}></Stack.Screen>
            <Stack.Screen name="Temp" component={Temp}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default VehicleCRUD