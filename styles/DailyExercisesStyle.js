import {Dimensions,StyleSheet,  } from "react-native";


export default StyleSheet.create({
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
  