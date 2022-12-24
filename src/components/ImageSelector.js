import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const ImageSelector = (props) => {

    const [pickedUrl, setPickedUrl] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'permisos insuficientes',
                [{ text: 'Ok' }]
            )
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        })

        setPickedUrl(image.uri)
        props.onImage(image.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (<Text>No hay imagen...</Text>)
                    : (<Image
                        style={styles.image}
                        source={{ uri: pickedUrl }}
                    />)}
            </View>
            <Button
                title='Tomar Foto'
                onPress={handlerTakeImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 400,
    },
    container: {
        marginBottom: 10,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default ImageSelector