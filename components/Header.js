import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import fontSize from '../constants/fontSize'
import { useFonts } from 'expo-font'

const Header = ({ title }) => {

  const [loaded] = useFonts({
    robFont: require('../assets/fonts/Roboto-Bold.ttf'),
  })

  if (!loaded) {
    return
  }

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontWeight: "400",
    fontSize: fontSize.title,
    fontFamily: 'robFont',
    color: "white"
  }
})

export default Header