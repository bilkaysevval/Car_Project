import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button, Divider } from 'react-native-paper';
import { useState } from 'react';
import vehicleAPI, { useCreateVehicleMutation, useGetVehicleByIdQuery, useUpdateVehicleMutation } from '../../APIs/vehicleAPI';


function UpdateVehicle({ route, navigation }) {
    console.log("updatevehicle")
    const vehicleId = route.params?.vehicleId;
    // const [ID, setID] = useState('');
    // const setVehicleID = (vehicleID) => {
    //     setID(vehicleID)
    //     console.log("vehicleID", ID)
    // }

    const { data, isLoading } = useGetVehicleByIdQuery(vehicleId);
    const [UpdateVehicle] = useUpdateVehicleMutation();
    const [vehicleModel, setVehicleModel] = useState({
        brand: data ? data.brand : "",
        model: data ? data.model : "",
        modelYear: data ? data.modelYear : "",
        price: data ? data.price : "",
        imageUrl: data ? data.imageUrl : "",
        description: data ? data.description : "",
        categoryId: data ? data.categoryId : "",
    });

    if (isLoading) {
        return (
            <View>
                <Text>
                    Vehicles are Loading in add or update
                </Text>
            </View>
        )
    }



    function inputChangeHandler(inputIdentifier, enteredValue) {
        setVehicleModel((currentInputValue) => {
            return {
                ...currentInputValue,
                [inputIdentifier]: enteredValue
            }
        })
    }

    const updateVehicleInDatabase = async () => {
        const updatedVehicleModel = {
            vehicleId: vehicleId,
            vehicleModel: {
                brand: vehicleModel.brand,
                model: vehicleModel.model,
                modelYear: vehicleModel.modelYear,
                price: vehicleModel.price,
                imageUrl: vehicleModel.imageUrl,
                description: vehicleModel.description,
                categoryId: vehicleModel.categoryId
            }
        }
        console.log("updatedVehicleModel", updatedVehicleModel)
        var response = await UpdateVehicle(updateVehicleInDatabase)
    }



    return (
        <View style={styles.view}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="vehicleID" placeholderTextColor="gray" style={styles.input} onChangeText={() => { }} />
            </View>
            <Button mode="contained-tonal" style={styles.modalButton} onPress={() => console.log("ID value: ", ID)}>
                <Text>get vehicle</Text>
            </Button>
            <View style={styles.inputContainer}>
                <TextInput placeholder="brand" defaultValue={data ? data.brand : ""} placeholderTextColor="gray" style={styles.input} onChangeText={(value) => inputChangeHandler("brand", value)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="model" defaultValue={data ? data.model : ""} placeholderTextColor="gray" style={styles.input} onChangeText={(value) => inputChangeHandler("model", value)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="modelYear" defaultValue={data ? data.modelYear : ""} placeholderTextColor="gray" style={styles.input} onChangeText={(value) => inputChangeHandler("modelYear", value)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="price" defaultValue={data ? data.price : ""} placeholderTextColor="gray" style={styles.input} onChangeText={(value) => inputChangeHandler("price", value)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="imageUrl" defaultValue={data ? data.imageUrl : ""} placeholderTextColor="gray" style={styles.input} onChangeText={(value) => inputChangeHandler("imageUrl", value)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="description" defaultValue={data ? data.description : ""} placeholderTextColor="gray" style={styles.input} onChangeText={(value) => inputChangeHandler("description", value)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="categoryId" defaultValue={data ? data.categoryId : ""} placeholderTextColor="gray" style={styles.input} onChangeText={(value) => inputChangeHandler("categoryId", value)} />
            </View>
        </View>
    )
}
export default UpdateVehicle

const styles = StyleSheet.create({
    view: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    inputContainer: {
        width: '80%',
        marginVertical: 5
    },
    modalButton: {
        backgroundColor: "pink",
        width: "80%"
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
    }
});