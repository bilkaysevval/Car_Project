import { Text, View, FlatList } from "react-native";
import { useGetAllCategoryQuery } from "../APIs/categoryAPI";
import CategoryItem from "./categoryItem";

function CategoryList() {

    const { data, isLoading } = useGetAllCategoryQuery();

    if (isLoading) {
        return (
            <View>
                <Text>loading</Text>
            </View>
        )
    }

    console.log("from category list")
    console.log(data)


    return (
        <>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CategoryItem item={item} ></CategoryItem>} ></FlatList>
        </>
    )
}

export default CategoryList