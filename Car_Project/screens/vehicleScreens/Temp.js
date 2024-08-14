import { View, Text } from 'react-native'
function Temp({ route, navigation }) {
    const vehicleId = route.params?.vehicleId;
    console.log("triggered temp")
    console.log(vehicleId)
    return (
        <View><Text>vehicle add or update</Text></View>
    )
}
export default Temp