import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import ImageFeatureScreen from "../screens/ImageFeatureScreen";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="cart" screenOptions={headerStyle = { backgroundColor: "red" }}>
                <Stack.Screen name="cart" component={ImageFeatureScreen} options={{ title: "Image Feature Screen" }} />
            </Stack.Navigator>
    )
}

export default CartNavigator

