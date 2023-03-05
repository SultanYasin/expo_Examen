import {View,Button,Text,Modal,SafeAreaView,ActivityIndicator,FlatList,} from "react-native";
import InlineTextButton from "../components/InlineTextButton";
import AppStyles from "../styles/AppStyles";
import { auth, db } from "../firebase";
import {collection,addDoc,query,where,getDocs,deleteDoc,doc,setDoc,} from "firebase/firestore";
import { sendEmailVerification } from "firebase/auth";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AddExercisesModal from "../components/AddExercisesModal";

export default function DailyExercises({ navigation }) {
  let [modalVisible, setModalVisible] = React.useState(false);
  let [isLoading, setIsLoading] = React.useState(true);
  let [isRefreshing, setIsRefreshing] = React.useState(false);
  let [toDos, setToDos] = React.useState([]);

  //DailyExercises

  let loadToDoList = async () => {
    const q = query(
      collection(db, "todos"),
      where("userId", "==", auth.currentUser.uid)
    );

    const querySnapshot = await getDocs(q);
    let toDos = [];
    querySnapshot.forEach((doc) => {
      let toDo = doc.data();
      toDo.id = doc.id;
      toDos.push(toDo);
    });

    setToDos(toDos);
    setIsLoading(false);
    setIsRefreshing(false);
  };

  if (isLoading) {
    loadToDoList();
  }

  let checkToDoItem = (item, isChecked) => {
    const toDoRef = doc(db, "todos", item.id);
    setDoc(toDoRef, { completed: isChecked }, { merge: true });
  };

  let deleteToDo = async (toDoId) => {
    await deleteDoc(doc(db, "todos", toDoId));
    let updatedToDos = [...toDos].filter((item) => item.id != toDoId);
    setToDos(updatedToDos);
  };

  let renderToDoItem = ({ item }) => {
    return (
      <View
        style={[
          AppStyles.rowContainer,
          AppStyles.rightMargin,
          AppStyles.leftMargin,
        ]}
      >
        <View style={AppStyles.fillSpace}>
          <BouncyCheckbox
            isChecked={item.complated}
            size={25}
            fillColor="#258ea6"
            unfillColor="#FFFFFF"
            text={item.text}
            iconStyle={{ borderColor: "#258ea6" }}
            onPress={(isChecked) => {
              checkToDoItem(item, isChecked);
            }}
          />
        </View>
        <InlineTextButton
          text="Delete"
          color="#258ea6"
          onPress={() => deleteToDo(item.id)}
        />
      </View>
    );
  };

  let showToDoList = () => {
    return (
      <FlatList
        data={toDos}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadToDoList();
          setIsRefreshing(true);
        }}
        renderItem={renderToDoItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  let showContent = () => {
    return (
      <View>
        {isLoading ? <ActivityIndicator size="large" /> : showToDoList()}
        <Button
          title="Add ToDo"
          onPress={() => setModalVisible(true)}
          color="#fb4d3d"
        />
      </View>
    );
  };

  let showSendVerificationEmail = () => {
    return (
      <View>
        <Text>Please verify your email to use ToDo</Text>
        <Button
          title="Send Verification Email"
          onPress={() => sendEmailVerification(auth.currentUser)}
        />
      </View>
    );
  };

  let addExercises = async (todo) => {
    let toDoToSave = {
      text: todo,
      completed: false,
      userId: auth.currentUser.uid,
    };
    const docRef = await addDoc(collection(db, "todos"), toDoToSave);

    toDoToSave.id = docRef.id;

    let updatedToDos = [...toDos];
    updatedToDos.push(toDoToSave);

    setToDos(updatedToDos);
  };

  return (
    <SafeAreaView>
      <View
        style={[
          AppStyles.rowContainer,
          AppStyles.rightAligned,
          AppStyles.rightMargin,
          AppStyles.topMargin,
        ]}
      >
        <InlineTextButton
          text="Manage Account"
          color="#258ea6"
          onPress={() => navigation.navigate("ManageAccount")}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <AddExercisesModal
          onClose={() => setModalVisible(false)}
          addExercises={addExercises}
        />
      </Modal>
      <Text style={AppStyles.header}>ToDo</Text>
      {auth.currentUser.emailVerified
        ? showContent()
        : showSendVerificationEmail()}
    </SafeAreaView>
  );
}

/* import React, {useState, useEffect} from "react";
import { View, Text, ImageBackground, TextInput, Pressable, FlatList, } from "react-native";
import DailyExercisesStyle from "../styles/DailyExercisesStyle";

export default function DailyExercises({ navigation, route }) {

  return(
    <View style={DailyExercisesStyle.container}>
<Text style={DailyExercisesStyle.title}>Add your daily exercise program</Text>
<Text >{JSON.stringify(route.params.user)} </Text>// this is how to get the returned auth credentials 

    </View>
  )

}



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
    //setExercises(prev => prev.concat(textInputValue + " \n "))dfg
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
    <View style={DailyExercisesStyle.container}>
      <ImageBackground
        source={require("../assets/2.jpg")}
        resizeMode="cover"
        style={DailyExercisesStyle.bgImg}
      >
        <Text style={DailyExercisesStyle.title}>Add your daily exercise program</Text>
        <TextInput
          onChangeText={handleTextChange}
          style={DailyExercisesStyle.textInput}
          value={textInputValue}
        />

        <Pressable
          onPress={handleAdd}
          style={({ pressed }) => [
            DailyExercisesStyle.btn,
            { opacity: pressed ? 0.5 : 1.0 },
          ]}
        >
          <Text style={DailyExercisesStyle.btnTxt}>Add</Text>
        </Pressable>

        <FlatList
          data={exercises}
          renderItem={
            _renderItems
          } // a function to render the items that I wanna show  
          keyExtractor={(exercise, index) => index}
        />
      </ImageBackground>
    </View>
  ); */
