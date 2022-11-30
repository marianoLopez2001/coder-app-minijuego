import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import categories from "../data/categories"


const Inicio = ({ navigation }) => {

  const handleSelected = (item) => {
    navigation.navigate("Panes", {
      categoryID: item.id,
      name: item.titulo,
    });
  };

  const renderGridItem = ({ item }) => {
    return (
      <GridItem
        item={item}
        onSelected={handleSelected}
      />
    )
  }


  return (
    <FlatList
      data={categories}
      key={() => { item.id }}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

export default Inicio

const styles = StyleSheet.create({
})