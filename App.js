import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>ผมชื่อเต้เต้ครับ อิอิ!</Text>
        <Text>From Gu Te.(2)</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
