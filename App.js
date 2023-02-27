import { Dimensions, Text, View } from "react-native";

import DailyExercises from "./screen/DailyExercises";
import Login from "./screen/Login";
import LoginStyle from "./styles/LoginStyle";

export default function App() {
  return (
    <View style={LoginStyle.container} >
      {/* <DailyExercises /> */}
      
      <Login />
    </View>
  );
}
