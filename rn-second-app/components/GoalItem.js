import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


//With <ScrollView></ScrollView> we can see our data and we can scroll the data that we are watching 
const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
//The styles of the file...
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;
