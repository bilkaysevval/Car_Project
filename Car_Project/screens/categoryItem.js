import { Pressable, Text, View, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


function CategoryItem({ item }) {

    const navigation = useNavigation();
    const VehiclesByCategoryIdHandler = () => {
        navigation.navigate('Vehicles', {
            id: item.id
        })
    }
    console.log("from category item")
    console.log(item)

    const HandleClick = () => {
        console.log("Clicked")
    }

    return (
        // <ScrollView contentContainerStyle={styles.scrollContainer}>
        //     {["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"].map((title, index) => (
        //         <Pressable key={index} onPress={() => handlePress(title)}>
        //             <Card style={styles.card}>
        //                 <Card.Content>
        //                     <Title>{title}</Title>
        //                     <Paragraph>Paragraph {index + 1}</Paragraph>
        //                 </Card.Content>
        //             </Card>
        //         </Pressable>
        //     ))}
        // </ScrollView>
        <Pressable onPress={VehiclesByCategoryIdHandler}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title>{item.categoryName}</Title>
                    <Paragraph>{item.categoryDescription}</Paragraph>
                </Card.Content>
            </Card>
        </Pressable>
    );
}

export default CategoryItem

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 16,
    },
    card: {
        margin: 16,
        alignItems: "center",
        backgroundColor: "pink"
    }
})