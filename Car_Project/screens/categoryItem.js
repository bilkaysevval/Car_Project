import { Text, View } from "react-native"
function CategoryItem(item) {
    console.log("item")
    console.log(item)
    if (!item) {
        return "null";
    }

    return (
        <View>
            <Text>{item.categoryName}</Text>
            <Text>{item.categoryDescription}</Text>
        </View>
    )
}

export default CategoryItem