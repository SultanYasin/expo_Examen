import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  
    
  },

  backgroundCover: {
    alignSelf: "stretch",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    opacity: 0.8,
   
    padding:18
  },

  lightText: {
    color: "#fff",
  },

  header: {
    fontSize: 20,
  },

  textInput: {
    alignSelf: "stretch",
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8,
    padding:10
  },

  lightTextInput: {
    borderBottomColor: "#ffffff",
  },
  darkTextInput: {
    borderBottomColor: "#000000",
  },
  inlineTextButton: {
    color: "#87F1FF",
  },
  pressedInlineTextButton: {
    color: "#87F1FF",
    opacity: 0.6,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },
});
