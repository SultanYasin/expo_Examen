import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, Text, View } from "react-native";

import DailyExercises from "./screen/DailyExercises";
import Login from "./screen/Login";
import LoginStyle from "./styles/LoginStyle";

export default function App() {  
  /* <DailyExercises /> */
  return (
    <View style={LoginStyle.container} >
      <Login />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
      
    </View>
  );
}
