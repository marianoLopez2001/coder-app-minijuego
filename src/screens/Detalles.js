import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Detalles = ({navigation}) => {
  return (
    <View>
      <Text>Detalles</Text>
      <Button title='Ir a Inicio' onPress={() => navigation.navigate("Inicio")}/>
    </View>
  )
}

export default Detalles

const styles = StyleSheet.create({})