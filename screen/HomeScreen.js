import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: "18" }}>
          HomeScreen
        </Text>
        <View style={styles.viewWrapper}>
          <View>
            <Text style={styles.num}>0</Text>
            <Text style={styles.text}>WORKOUT</Text>
          </View>
          <View>
            <Text style={styles.num}>0</Text>
            <Text style={styles.text}>KCAL</Text>
          </View>
          <View>
            <Text style={styles.num}>0</Text>
            <Text style={styles.text}>MINS</Text>
          </View>
        </View>
        <View>
          <Image style={styles.img} source={require("../assets/icon.png")} />
        </View>
        
            
        <FitnessCards />
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#CD853F",
    paddingTop: 10,
    paddingLeft: 20,
    height: 200,
    width: "100%",
    backgroundColor: "gray",
    

  },

  viewWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  num: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  text: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
  img: {
    width: "90%",
    height: 120,
    marginTop: 20,
    borderRadius: 7,
  },
});
