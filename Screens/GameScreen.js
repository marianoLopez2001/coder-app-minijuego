import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import fontSize from '../constants/fontSize'
import Header from '../components/Header';

const GameScreen = () => {

  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

  return (
    <>
      <Header title={"Generador de numero"} />
      <View style={styles.container}>
        <Text style={{ fontSize: fontSize.title, margin: 10 }}>La suposicion del oponente</Text>
        <View style={styles.subContainer}>
          <Button title='Menor' />
          <Text>{currentGuess}</Text>
          <Button title='Mayor' />
        </View>
      </View>
    </>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
})