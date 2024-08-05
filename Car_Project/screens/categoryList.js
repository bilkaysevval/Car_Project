import { Text, View, FlatList } from "react-native";
import { useGetAllCategoryQuery } from "../APIs/categoryAPI";
import CategoryItem from "./categoryItem";

function CategoryList() {

    const { data, isLoading } = useGetAllCategoryQuery();

    console.log("data")
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