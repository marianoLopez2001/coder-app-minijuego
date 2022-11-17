import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Panes from "../screens/Panes"
import Inicio from "../screens/Inicio"
import SobreNosotros from "../screens/SobreNosotros"
import React from 'react'

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Panes" component={Panes} />
                <Stack.Screen name="SobreNosotros" component={SobreNosotros} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigation

