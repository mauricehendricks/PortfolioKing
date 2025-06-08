import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
}


