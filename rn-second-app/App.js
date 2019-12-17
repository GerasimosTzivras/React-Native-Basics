//useState : introduction to React Hooks
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
//Imports of the other files , so that they can use props etc.
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //This is used because we want to output all the elements we added
  const [courseGoals, setCourseGoals] = useState([]);
  //This is used because we want the text input for the goal to be appeared... or disappeared
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      //... JS feature -> Spread Operator
      //This:
      //<Modal {...person} title='Modal heading' animation={false} />
      //is equal to
      //<Modal name={person.name} age={person.age} title='Modal heading' animation={false} />
      //So in short, it's a neat short-cut, we can say.
      ...currentGoals,
      //The key for the Goals
      //Supports "id" instead of "key"
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  //This function is responsible to "delete" the goal that we choose
  //But the exact thing that is does is to "disappear" it, not to delete it
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  //Toggle for the appearance of text input
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  
  return (
    //At RN everything MUST be between wrappers. eg: View... Text...
    //We cant use div 
    //The styles that we are gonna use
    <View style={styles.screen}>
      {/*Appear or disappear text input */}
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      {/*We print the list
        Every list MUST have a key
        If you have a list with hundreds or thousands of elements and there are all always rendered
        even if you dont see them, that can really slow down your app
        FlatList is almost like ScrollView, even better, because for long lists, it doesnt render all the items
      */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
//The styles are written like that! There is no CSS at RN
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
//You would use flexbox stylings (e.g. flex:1 ... ) to have content adjust itselft to the available space