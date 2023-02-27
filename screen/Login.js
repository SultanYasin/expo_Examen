

import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import LoginStyle from "../styles/LoginStyle";

export class Login extends Component {
  render() {
    return (
      <View style={LoginStyle.container}>
        <View style={LoginStyle.backgroundCover}>
          <Text style={[LoginStyle.lightText, LoginStyle.header]}>Login</Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor="whitesmoke"
            style={[LoginStyle.lightText, LoginStyle.textInput, LoginStyle.lightTextInput]}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="whitesmoke"
            style={[LoginStyle.lightText, LoginStyle.textInput, LoginStyle.lightTextInput]}
          />
        </View>
      </View>
    );
  }
}

export default Login;
/*
 import LoginStyle from "../styles/LoginStyle";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeState = (name, value) => {
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResetState = () => {
    setIsSignup(!isSignup);
    setInput({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleSubmit = () => {
    console.log(input);
  };

  return (
    <Box style={styles.boxStyle}>
      <Typography textAlign="center" variant="h4" padding={3}>
        {isSignup ? "Signup" : "Login"}{" "}
      </Typography>
      <Avatar sx={{ bgcolor: "secondary.main", marginLeft: "46%" }}>
        <LockOutlinedIcon />
      </Avatar>
      {isSignup && (
        <TextField
          onChangeText={(value) => handleChangeState("name", value)}
          name="name"
          type={"text"}
          value={input.name}
          variant="outlined"
          placeholder="Name :"
          fullWidth
          margin="normal"
        />
      )}
      <TextField
        onChangeText={(value) => handleChangeState("email", value)}
        name="email"
        type={"email"}
        value={input.email}
        variant="outlined"
        placeholder="Email :"
        margin="normal"
        fullWidth
      />
      <TextField
        onChangeText={(value) => handleChangeState("password", value)}
        name="password"
        type={"password"}
        value={input.password}
        variant="outlined"
        placeholder="Password :"
        margin="normal"
        fullWidth
      />
      {isSignup && (
        <TextField
          margin="normal"
          required
          fullWidth
          name="Password"
          label="Password"
          type="password"
          id="password"
          placeholder="ConfirmPassword"
        />
      )}
      <Button
        endIcon={isSignup ? <HowToRegSharpIcon /> : <LoginSharpIcon />}
        onPress={handleSubmit}
        style={{ marginTop: 10, marginBottom: 20 }}
        fullWidth
        variant="contained"
      >
        {isSignup ? "Signup" : "Login"}
      </Button>
      <Button
        onPress={handleResetState}
        endIcon={isSignup ? <LoginSharpIcon /> : <HowToRegSharpIcon />}
      >
        {isSignup ? "Change to LOGIN" : "Don't have an account? signup"}
      </Button>

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />

      <Grid item style={{ marginTop: 20, marginBottom: 30 }}>
        <Link href="#">
          <Typography variant="body2">Forgot password?</Typography>
        </Link>
      </Grid>
    </Box>
  );
};

export default Login;










import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import InlineTextButton from "../components/InlineTextButton";
import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import LoginStyle from "../styles/LoginStyle";

export default function Login({ navigation }) {
  const background = require("../assets/background.jpg");

  if (auth.currentUser) {
    navigation.navigate("ToDo");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("ToDo");
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("ToDo", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  };

  return (
    <ImageBackground style={LoginStyle.imageContainer} source={background}>
      <KeyboardAvoidingView
        style={LoginStyle.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}
      >
        <Text style={[LoginStyle.lightText, LoginStyle.header]}>Login</Text>
        <Text style={LoginStyle.errorText}>{errorMessage}</Text>
        <TextInput
          style={[
            LoginStyle.textInput,
            LoginStyle.lightTextInput,
            LoginStyle.lightText,
          ]}
          placeholder="Email"
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[
            LoginStyle.textInput,
            LoginStyle.lightTextInput,
            LoginStyle.lightText,
          ]}
          placeholder="Password"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={[LoginStyle.rowContainer, LoginStyle.topMargin]}>
          <Text style={LoginStyle.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
        <View style={[LoginStyle.rowContainer, LoginStyle.bottomMargin]}>
          <Text style={LoginStyle.lightText}>Forgotten your password? </Text>
          <InlineTextButton
            text="Reset"
            onPress={() => navigation.navigate("ResetPassword")}
          />
        </View>
        <Button title="Login" onPress={login} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
 */
