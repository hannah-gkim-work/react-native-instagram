import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
//need to have both fierbase & Firebase
import firebase from "firebase/compat/app";
import Firebase from "../../src/firebase/config";
// const auth = Firebase.auth();

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = async () => {
    try {
      console.log("here-->", name, email);
      let result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("result:", result);

      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({ name, email });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <View>
      <TextInput placeholder="name" onChangeText={(name) => setName(name)} />
      <TextInput
        placeholder="email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        onPress={() => {
          onSignUp();
        }}
        title="Sign Up"
      />
    </View>
  );
}
