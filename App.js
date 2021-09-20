import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showAddInput, setAddInputVisible] = useState(false);

  const handlePress = goalItem => {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        value: goalItem,
      },
    ]);

    setAddInputVisible(false);
  };

  const handleDeleteItem = id => {
    const newList = goals.filter(item => item.key !== id);

    setGoals(newList);
  }

  closeAddingPopup = () => {
    setAddInputVisible(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setAddInputVisible(true)}  />
      <GoalInput onAddGoal={handlePress} visible={showAddInput} closeAddingPopup={closeAddingPopup} />
      <FlatList
        data={goals}
        renderItem={({item}) => <GoalItem item={item} onDelete={() => handleDeleteItem(item.key)} />}
        keyExtractor={ item => item.key }
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 100,
    paddingHorizontal: 50
  }
});
