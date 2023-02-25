import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import HomeScreen from "./screen/HomeScreen";

export default function App() {

  const [textInputValue, setTextInputValue] = useState("")
  const [exercises, setExercises] = useState([])

  const handleTextChange = (text) => {
    setTextInputValue(text)
    
  };

  useEffect(() => {
    console.log(exercises)
  }, [exercises])
  

const handleAdd = () => {
  setExercises(prev => [...prev, textInputValue])
  //setExercises(prev => prev.concat(textInputValue + " \n "))
  setTextInputValue("")
  
}

const _renderItems = ({item: exercise}) => {
  return( <View>

   <span> <Text> {exercise} </Text></span>
  </View>
  )
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

      <FlatList 
        data={exercises}
        renderItem={_renderItems}/* a function to render the items that I wanna show  */
        keyExtractor = {(exercise, index) => index}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CD853F",
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
