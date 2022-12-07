import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GridItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={() => onSelected(item)}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default GridItem

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 3,
    margin: 15,
    height: 150,
    backgroundColor: "pink",
  },

  title: {
    textAlign: "center",
    margin: 10,
    fontSize: 18,
  }
});

