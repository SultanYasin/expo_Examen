import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ResetPassword from "./screens/ResetPassword";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import DailyExercises from './screens/DailyExercises'
/* import ToDo from "./screens/ToDo";
import ManageAccount from "./screens/ManageAccount"; */

const Stack = createNativeStackNavigator();

export default function App() {

  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBWI1ofL1DErfKQUIijgxdoF3QdtzN3Ols",
  authDomain: "fitness-4b5cc.firebaseapp.com",
  projectId: "fitness-4b5cc",
  storageBucket: "fitness-4b5cc.appspot.com",
  messagingSenderId: "721747822830",
  appId: "1:721747822830:web:088b62c1a841e72fdacbff",
  measurementId: "G-RTT0PPYCQL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DailyExercises"
          component={DailyExercises}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
