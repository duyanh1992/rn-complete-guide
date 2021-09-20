import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

function GoalInput({ onAddGoal, visible, closeAddingPopup }) {
  const [inputText, setInputText] = useState("");

  const handleAddGoal = () => {
    onAddGoal(inputText);
    setInputText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter text ..."
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
        />
      </View>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="Add"
            onPress={() => handleAddGoal()}
            style={{ marginRight: "10px" }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Close"
            color="red"
            onPress={() => closeAddingPopup()}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderBottomWidth: 1,
    marginRight: 1,
  },
  inputContainer: {
    // flexDirection: "row",
    // justifyContent: "center",
    // alignContent: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  buttons: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: '30%'
  }
});

export default GoalInput;
