import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import HomeScreen from "./screen/HomeScreen";

export default function App() {

  const [textInputValue, setTextInputValue] = useState("")
  const [index, setIndex] = useState([])

  const handleTextChange = (text) => {
    setTextInputValue(text)
    
  };

  useEffect(() => {
    console.log(index)
  }, [index])
  

const handleAdd = () => {
  setIndex(prev => prev.concat(textInputValue + " \n "))
  setTextInputValue("")
  
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add your daily exercise program</Text>
      <TextInput
        onChangeText={handleTextChange}
        style={styles.textInput}
        value={textInputValue}
      />
      <Button title="Add" onPress={handleAdd}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    color: "silver",
  },
  title: {
    fontSize: 25,
    marginTop: 40,
    color: "silver",
  },
  textInput: {
    backgroundColor: "gray",
    width: "70%",
    margin: 20,
    padding: 10,
    borderRadius: 5,
  },
});
