import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Inicio = ({navigation}) => {

  return (
    <View>
      <Text>Inicio</Text>
      <Button title='Ir a Panes' onPress={() => navigation.navigate("Panes")}/>
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({})