import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  // State Hooks dove l'input viene salvato
  const [enteredGoalText, setEnteredGoalText] = useState("");
  // State Hooks dove vengono salvati i goal
  const [courseGoals, setCourseGoals] = useState([]);

  const goalinputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal!"
            onChangeText={goalinputHandler}
          />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5c0acc",
  },
  goalText: {
    color: "white",
  },
});
