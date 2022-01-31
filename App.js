// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase/compat/app";
import Firebase from "./src/firebase/config";
import Landing from "./component/auth/Landing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";

const Stack = createStackNavigator();
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    return () => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    };
  }, [user]);

  return (
    <>
      {loaded ? (
        <View stype={{ flex: 1, justifyContent: "Center" }}>
          <Text>User is logedIn</Text>
        </View>
      ) : (
        <View stype={{ flex: 1, justifyContent: "Center" }}>
          <Text>Loading</Text>
        </View>
      )}
      {loggedIn ? (
        <View>Logged in</View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              option={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
