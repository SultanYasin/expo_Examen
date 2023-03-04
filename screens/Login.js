import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import LoginStyle from '../styles/LoginStyle';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
  const background = require("../assets/2.jpg");

  if (auth.currentUser) {
    navigation.navigate("DailyExercises");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) { navigation.navigate("DailyExercises"); }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("DailyExercises", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  }

  return (
    <ImageBackground style={LoginStyle.imageContainer} source={background}>
      <KeyboardAvoidingView 
        style={LoginStyle.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[LoginStyle.lightText, LoginStyle.header]}>Login</Text>
        <Text style={LoginStyle.errorText}>{errorMessage}</Text>
        <TextInput 
          style={[LoginStyle.textInput, LoginStyle.lightTextInput, LoginStyle.lightText]} 
          placeholder='Email' 
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
        <TextInput 
          style={[LoginStyle.textInput, LoginStyle.lightTextInput, LoginStyle.lightText]} 
          placeholder='Password' 
          placeholderTextColor="#BEBEBE" 
          secureTextEntry={true} 
          value={password} 
          onChangeText={setPassword} />
        <View style={[LoginStyle.rowContainer, LoginStyle.topMargin]}>
          <Text style={LoginStyle.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
        <View style={[LoginStyle.rowContainer, LoginStyle.bottomMargin]}>
          <Text style={LoginStyle.lightText}>Forgotten your password? </Text>
          <InlineTextButton text="Reset" onPress={() => navigation.navigate("ResetPassword")} />
        </View>
        <Button title="Login" onPress={login} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

