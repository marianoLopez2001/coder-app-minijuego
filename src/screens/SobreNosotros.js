import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const SobreNosotros = ({navigation}) => {
  return (
    <View>
      <Text>SobreNosotros</Text>
      <Button title='Ir a Inicio' onPress={() => navigation.navigate("Inicio")}/>
    </View>
  )
}

export default SobreNosotros

const styles = StyleSheet.create({})