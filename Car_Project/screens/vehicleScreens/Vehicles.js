import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useGetVehiclesByCategoryIdQuery } from '../../APIs/vehicleAPI';
import { useNavigation } from '@react-navigation/native'

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
    // const vehicleNavigation = useNavigation(); use 'navigation' instead of vehicleNavigation
    const handleClick = (id) => {
        console.log("pressed")
        navigation.navigate('Vehicle Detail', {
            vehicleId: id
        })
    }

    console.log("Clicked")
    console.log("selectedId")
    console.log(selectedCategoryId)
    console.log("data")
    console.log(data)
    console.log(data[0].imageUrl)
    if (!data || data.length === 0) {
        return (
            <>
                <View><Text>No vehicles available</Text></View>
            </>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => handleClick(item.id)}>
                            <Image source={{ uri: item.imageUrl }} style={styles.image}></Image>
                            <View style={styles.textContainer}>
                                <Text style={styles.brandText}>{item.brand}</Text>
                                <Text style={styles.modelText}>{item.brand}</Text>
                            </View>
                        </TouchableOpacity>
                    )} ></FlatList>
            </View>
        )
    }
}

export default Vehicles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    itemContainer: {
        backgroundColor: 'pink',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "stretch"
    },
    image: {
        flex: 1,
        marginLeft: 16,
        width: 50,
        height: 50
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    brandText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    modelText: {
        fontSize: 15,
    }
})