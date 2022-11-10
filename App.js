import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './Screens/GameScreen';
import StartScreen from './Screens/StartScreen';

export default function App() {

  const [switchScreen, setSwitchScreen] = useState(false)

  const handleSwitchScreen = () => {
    setSwitchScreen(true)
  }

  return (
    <View style={styles.container}>
      {switchScreen ? <GameScreen /> : <StartScreen handleSwitchScreen={handleSwitchScreen} style={styles.container} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
