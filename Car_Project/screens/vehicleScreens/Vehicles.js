import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useGetVehiclesByCategoryIdQuery } from '../../APIs/vehicleAPI';

function Vehicles({ route, navigation }) {

    const selectedCategoryId = route.params?.id;
    const { data, isLoading } = useGetVehiclesByCategoryIdQuery(selectedCategoryId)
    if (isLoading) {
        return (
            <>
                <View>
                    <Text>vehicles are loading</Text></View></>
        )
    }
    console.log("Clicked")
    console.log("selectedId")
    console.log(selectedCategoryId)
    console.log("data")
    console.log(data)
    console.log("data")
    console.log(data[0].id)

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>
                        {item.brand}
                    </Text>
                </View>
            )} ></FlatList>
    )
}

export default Vehicles