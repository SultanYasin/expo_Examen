import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import LoginStyle from "../styles/LoginStyle";

export default function Login() {

  
  let [errorMessage, setErrorMessage] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
 
    return (
      <View style={LoginStyle.container}>
        <View style={LoginStyle.backgroundCover}>
          <Text style={[LoginStyle.lightText, LoginStyle.header]}>Login</Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor="whitesmoke"
            value={username}
            onChangeText={setUsername}
            style={[LoginStyle.lightText, LoginStyle.textInput, LoginStyle.lightTextInput]}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="whitesmoke"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            style={[LoginStyle.lightText, LoginStyle.textInput, LoginStyle.lightTextInput]}
          />

          <Text style={LoginStyle.lightText} >Don't you have an account? Signup</Text>
        </View>
      </View>
    );
  }




/* import LoginStyle from "../styles/LoginStyle";
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
 */
