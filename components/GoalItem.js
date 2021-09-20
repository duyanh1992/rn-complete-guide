import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";

function GoalItem({ item, onDelete }) {
  return (
    <TouchableOpacity onPress={onDelete} activeOpacity={0.8}>
      <View style={styles.listItem}>
        <Text>{item?.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default GoalItem;
