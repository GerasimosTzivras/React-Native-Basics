import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  //This function with React Hooks, sets from the beggining as the 
  //entered goal as '', and after goalInputHandler function sets the new goal
  const [enteredGoal, setEnteredGoal] = useState('');
  //This function is the connection between the TextInput and the React Hoooks funtion
  //that is used for the new Goal
  //This function can be written (but not recommended)
  //function goalInputHandler(enteredText) {
  //  setEnteredGoal(enteredGoal);
  //}
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  //The function wont take any arguments, but I want to add my entered goal to 
  //a list of goal
  //Also, resets the text input
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

//The styles for this file...
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    //Positioning
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    //flexDirection is responsible to show items one next to other
    flexDirection: 'row',
    //justifyContent is responsible for how far items will be (used with flexDirection)
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
