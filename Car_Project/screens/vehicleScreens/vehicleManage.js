import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import vehicleAPI, { useGetAllVehicleQuery, useRemoveVehicleMutation } from '../../APIs/vehicleAPI';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
function VehicleManage() {

    // const [vehicleModel, setVehicleModel] = useState([]);
    const { data, isLoading } = useGetAllVehicleQuery();
    const [RemoveVehicle] = useRemoveVehicleMutation();
    const navigation = useNavigation();
    if (isLoading) {
        return (
            <>
                <View>
                    <Text>vehicles are loading</Text>
                </View>
            </>
        )
    }

    const removeVehicleHandler = (vehicleId) => {
        const vehicleToRemove = data.find(x => x.id === vehicleId);
        console.log("vehicleToRemove")
        console.log(vehicleToRemove)
        Alert.alert(
            "Confirm Removal",
            "Are you sure you want to remove this vehicle?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => RemoveVehicle(vehicleId) }
            ]
        );
    }

    const handleAddOrUpdate = (vehicleId) => {
        console.log("Navigating to VehicleAddOrUpdate with ID:", vehicleId);
        navigation.navigate("Temp", { vehicleId: vehicleId })

    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => handleAddOrUpdate(item.id)}>
                        <Image source={{ uri: item.imageUrl }} style={styles.image}></Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.brandText}>{item.brand}</Text>
                            <Text style={styles.modelText}>{item.model}</Text>
                        </View>
                        <Button mode="contained-tonal" style={styles.removeButton} onPress={() => removeVehicleHandler(item.id)}>
                            <Text>Remove</Text>
                        </Button>
                    </TouchableOpacity>
                )} ></FlatList>
            <Button mode="contained-tonal" style={styles.createButton} onPress={() => handleAddOrUpdate()}>
                <Text>Create Vehicle</Text>
            </Button>
        </View>
    )

}

export default VehicleManage

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
    },
    createButton: {
        marginTop: 20,
        backgroundColor: "pink"
    },
    removeButton: {
        backgroundColor: "powderblue"
    }
})