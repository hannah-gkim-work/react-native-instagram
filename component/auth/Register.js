import React, { useState } from "react";
import { View, Button, Text } from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = () => {};
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
