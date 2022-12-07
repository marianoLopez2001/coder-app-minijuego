import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BreadItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity style={styles.breadItem} onPress={() => onSelected(item)}>
            <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.price}</Text>
                <Text style={styles.subsubtitle}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BreadItem

const styles = StyleSheet.create({
    breadItem: {
        flex: 1,
        borderRadius: 3,
        margin: 15,
        height: 150,
        backgroundColor: "orange",
    },
    title: {
        textAlign: "center",
        margin: 10,
        fontSize: 25,
        fontWeight: "bold",
    },
    subtitle: {
        textAlign: "center",
        margin: 10,
        fontSize: 18,
    },
    subsubtitle: {
        textAlign: "center",
        margin: 5,
        fontSize: 12,
    }
})