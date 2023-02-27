import React, {useState, useEffect} from "react";
import { View, Text, ImageBackground, TextInput, Pressable, FlatList, } from "react-native";
import DailyExercisesStyle from "../styles/DailyExercisesStyle";

export default function DailyExercises() {
  const [textInputValue, setTextInputValue] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleTextChange = (text) => {
    setTextInputValue(text);
  };

  useEffect(() => {
    console.log(exercises);
  }, [exercises]);

  const handleAdd = () => {
    setExercises((prev) => [...prev, textInputValue]);
    //setExercises(prev => prev.concat(textInputValue + " \n "))dfg
    setTextInputValue("");
  };

  const handleChangeItem = () => {
    console.log(
      "handleChange has been clicked on : " +
        new Date().toISOString().slice(0, 10)
    );
  };

  const _renderItems = ({ item: exercise }) => {
    return (
      <View>
        <Text onPress={handleChangeItem}> {exercise} </Text>
        <Text> {"______________________"} </Text>
      </View>
    );
  };

  return (
    <View style={DailyExercisesStyle.container}>
      <ImageBackground
        source={require("../assets/2.jpg")}
        resizeMode="cover"
        style={DailyExercisesStyle.bgImg}
      >
        <Text style={DailyExercisesStyle.title}>Add your daily exercise program</Text>
        <TextInput
          onChangeText={handleTextChange}
          style={DailyExercisesStyle.textInput}
          value={textInputValue}
        />

        <Pressable
          onPress={handleAdd}
          style={({ pressed }) => [
            DailyExercisesStyle.btn,
            { opacity: pressed ? 0.5 : 1.0 },
          ]}
        >
          <Text style={DailyExercisesStyle.btnTxt}>Add</Text>
        </Pressable>

        <FlatList
          data={exercises}
          renderItem={
            _renderItems
          } /* a function to render the items that I wanna show  */
          keyExtractor={(exercise, index) => index}
        />
      </ImageBackground>
    </View>
  );
}
