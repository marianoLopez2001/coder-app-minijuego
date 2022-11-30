import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Panes from "../screens/Panes"
import Inicio from "../screens/Inicio"
import Detalles from "../screens/Detalles"
import React from 'react'

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
    return (
            <Stack.Navigator initialRouteName="Inicio" screenOptions={headerStyle = { backgroundColor: "red" }}>
                <Stack.Screen name="Inicio" component={Inicio} options={{ title: "Inicio Panes" }} />
                <Stack.Screen name="Panes" component={Panes} options={({ route }) => ({ title: route.params.name })} />
                <Stack.Screen name="Detalles" component={Detalles} />
            </Stack.Navigator>
    )
}

export default ShopNavigation

