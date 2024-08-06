import { Pressable, Text, View, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { Card, Title, Paragraph } from "react-native-paper";
function CategoryItem(item) {
    console.log("item")
    console.log(item)
    if (!item) {
        return "null";
    }

    const handlePress = (title) => {
        console.log(`Pressed: ${title}`);

    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"].map((title, index) => (
                <Pressable key={index} onPress={() => handlePress(title)}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Title>{title}</Title>
                            <Paragraph>Paragraph {index + 1}</Paragraph>
                        </Card.Content>
                    </Card>
                </Pressable>
            ))}
        </ScrollView>
        // <Pressable>
        //     <Card style={styles.card}>
        //         <Card.Content>
        //             <Title>title</Title>
        //             <Paragraph>Paragraph</Paragraph>
        //         </Card.Content>
        //     </Card>
        // </Pressable>
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