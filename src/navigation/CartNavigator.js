import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="cart" screenOptions={headerStyle = { backgroundColor: "red" }}>
                <Stack.Screen name="cart" component={CartScreen} options={{ title: "Carrito" }} />
            </Stack.Navigator>
    )
}

export default CartNavigator

