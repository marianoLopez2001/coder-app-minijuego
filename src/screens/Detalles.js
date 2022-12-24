import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

const Detalles = () => {
  // const bread = useSelector((state) => state.breads.selected)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Category</Text>
      <Text style={styles.title}>{breads.title}</Text>
    </View>
  )
}

export default Detalles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  }
})