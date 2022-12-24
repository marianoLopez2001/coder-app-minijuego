import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ImageSelector from '../components/ImageSelector'

const ImageFeatureScreen = () => {

    return (
        <View>
            <Text style={styles.title}>Image Screen</Text>
            <ImageSelector onImage={(image) => { console.log(image); }} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 20,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default ImageFeatureScreen