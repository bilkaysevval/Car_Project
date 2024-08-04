import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = ({ }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>heyoo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default App;
