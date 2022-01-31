import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase/compat/app";
import Firebase from "../../src/firebase/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async () => {
    try {
      let result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("result:", result);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <View>
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
        title="Sign In"
      />
    </View>
  );
}
