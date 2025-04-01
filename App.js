import React from "react";
import Routes from "./src/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" />
      <Routes />
    </NavigationContainer>
  );
}
