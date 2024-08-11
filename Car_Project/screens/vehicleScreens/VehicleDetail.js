import { View, Text, StyleSheet } from "react-native";
import { useGetVehicleByIdQuery } from "../../APIs/vehicleAPI";
import { Card, Title, Paragraph } from 'react-native-paper'

function VehicleDetail({ route, navigation }) {
    const vehicleId = route.params?.vehicleId;
    console.log("from vehicle detail")
    console.log(vehicleId)
    const { data, isLoading } = useGetVehicleByIdQuery(vehicleId);

    if (isLoading) {
        return (
            <View>
                <Text>
                    Details Loading..
                </Text>
            </View>
        )
    }

    console.log(data)
    console.log("data")

    return (
        <Card style={styles.card}>
            <Card.Cover style={styles.coverImage} source={{ uri: data.imageUrl }}></Card.Cover>
            <Card.Content>
                <Title style={styles.title}>{data.brand}</Title>
                <Title style={styles.subtitle}>{data.model}</Title>
                <Paragraph style={styles.paragraph}>${data.price.toFixed(2)}</Paragraph>
                <Paragraph style={styles.paragraph} >{data.description}</Paragraph>
                <Paragraph style={styles.paragraph}>Model Year: {data.modelYear}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default VehicleDetail

const styles = StyleSheet.create({
    coverImage: {
        height: 100
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        textAlign: "center"
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 4,
        textAlign: "center"
    },
    card: {
        margin: 16
    }
})