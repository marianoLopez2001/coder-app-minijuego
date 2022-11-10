import { Button, StyleSheet, TextInput, View, Text, Pressable } from 'react-native'
import { useState } from 'react'
import colors from '../constants/colors'
import fontSize from '../constants/fontSize'
import Header from '../components/Header';

const StartScreen = ({ handleSwitchScreen }) => {

    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    const [input, setInput] = useState("")

    const handleInput = (e) => {
        setInput(e)
    }

    const handleClear = () => {
        setInput("")
        setConfirmed(false)
    }

    const handleConfirm = () => {
        const choseNumber = parseInt(input)
        if (choseNumber === NaN) { // <-------------------
            return
        }
        setConfirmed(true)
        setSelectedNumber(choseNumber)
        setInput("")
    }

    return (
        <>
            <Header title={"Adivina el nro"} />
            <View style={styles.container} >
                <View style={styles.viewGeneral}>
                    <TextInput style={styles.input} value={input} onChangeText={handleInput} placeholder='INGRESE NRO' />
                    <View style={styles.viewBotones}>
                        <Button onPress={handleClear} title='limpiar' />
                        <Button onPress={handleConfirm} title='confirm' />
                    </View>
                </View>
                <View style={styles.numero}>
                    {confirmed ? <NumberConfirmed selectedNumber={selectedNumber} handleSwitchScreen={handleSwitchScreen} /> : null}
                </View>
            </View>
        </>
    )
}

function NumberConfirmed({ selectedNumber, handleSwitchScreen }) {

    return (
        <>
            <Text style={{ fontSize: fontSize.title }}>Tu número</Text>
            <Text>{selectedNumber}</Text>
            <Pressable style={styles.pressable} onPress={handleSwitchScreen}>
                <Text style={{ fontSize: fontSize.subtitle, color: "white" }}>Continuar</Text>
            </Pressable>
        </>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewBotones: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-evenly',
    },
    viewGeneral: {
        margin: 30,
        padding: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black"
    },
    input: {
        padding: 5,
        marginBottom: 10,
        width: 200,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    numero: {
        flex: 1,
        alignItems: 'center',
    },
    pressable: {
        backgroundColor: colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15,
        margin: 15,
    },
})