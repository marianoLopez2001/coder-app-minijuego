import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import BreadItem from '../components/BreadItem'
import productos from "../data/productos"

const Panes = ({ navigation, route }) => {

  const breads = productos.filter(i => i.category === route.params.name)

  const handleSelected = (item) => {
    navigation.navigate("Detalles", {
      productId: item.id,
      name: item.titulo,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <BreadItem
        item={item}
        onSelected={handleSelected}
      />
    )
  }

  return (
    <FlatList
      data={breads}
      key={() => { item.id }}
      renderItem={renderItem}
      numColumns={2}
    />
  )
}

export default Panes

const styles = StyleSheet.create({})