import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {Dimensions,FlatList,ImageBackground,Pressable,StyleSheet,Text,TextInput,View,
} from "react-native";
import HomeScreen from "./screen/HomeScreen";

export default function App() {
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
    //setExercises(prev => prev.concat(textInputValue + " \n "))
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
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/2.jpg")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        <Text style={styles.title}>Add your daily exercise program</Text>
        <TextInput
          onChangeText={handleTextChange}
          style={styles.textInput}
          value={textInputValue}
        />

        <Pressable
          onPress={handleAdd}
          style={({ pressed }) => [
            styles.btn,
            { opacity: pressed ? 0.5 : 1.0 },
          ]}
        >
          <Text style={styles.btnTxt}>Add</Text>
        </Pressable>

        <FlatList
          data={exercises}
          renderItem={_renderItems} /* a function to render the items that I wanna show  */
          keyExtractor={(exercise, index) => index}
        />
      </ImageBackground>
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
    width: "100%",
    margin: 20,
    padding: 10,
    borderRadius: 5,
  },
  bgImg: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  btn: {
    color: "white",
    backgroundColor: "dodgerblue",
    marginHorizontal: 10,
    borderRadius: 8,
    height: 40,
  },
  btnTxt: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});
