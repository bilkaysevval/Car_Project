import { View, Text } from "react-native";
import { useGetVehicleByIdQuery } from "../../APIs/vehicleAPI";

function VehicleDetail({ route, navigation }) {
    const vehicleId = route.params?.vehicleId;
    console.log("from vehicle detail")
    console.log(vehicleId)
    const { data, isLoading } = useGetVehicleByIdQuery(vehicleId);
    console.log(data)
    console.log("data")
    return (
        <View>
            <Text>detail page {vehicleId}</Text>
        </View>
    )
}

export default VehicleDetail