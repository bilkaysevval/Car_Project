import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "./categoryList";

export default function CategoryOverview() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Category List' component={CategoryList}></Stack.Screen>
        </Stack.Navigator>
    )
}