import React, {useState} from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function App() {
  //The useState is a hook and this is how it works!
  //It gives you an array with exactly two elements
  //The first element is your current state snapshot 
  //(so either our starting state or thereafter for subsequent re-render cycles whatever we set our state to )
  //The second element is a function that allows you to set your state to a new value 
  //(calling that function will re-render the entire component and output text will then refer to the latest new state)
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText('The text changed!')} /> 
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
