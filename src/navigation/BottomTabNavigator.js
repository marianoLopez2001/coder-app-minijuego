import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigation from "./ShopNavigation";
import CartNavigator from "./CartNavigator";
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
const BottomTabs = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}>
                <BottomTabs.Screen name="ShopNavigation" component={ShopNavigation} options={{
                    tabBarIcon: ({ focus }) => (
                        <View>
                            <Ionicons style={{ textAlign: "center" }} name="home" size={20} color='black' />
                            <Text>Tienda</Text>
                        </View>
                    ),
                }} />
                <BottomTabs.Screen name="CartNavigator" component={CartNavigator} />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})