import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Panes = ({navigation}) => {
  return (
    <View>
      <Text>Panes</Text>
      <Button title='Ir a SobreNosotros' onPress={() => navigation.navigate("SobreNosotros")}/>
    </View>
  )
}

export default Panes

const styles = StyleSheet.create({})