import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        headerTitle: "", // Remove o título
        headerStyle: {
          backgroundColor: "#F5F5F5", // Cor de fundo do seu app
          elevation: 0, // Remove sombra no Android
          shadowOpacity: 0, // Remove sombra no iOS
        },
        headerBackImage: () => (
          <Ionicons name="arrow-back" size={24} color="#210518" />
        ),
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerLeft: null, // Remove o botão de voltar na tela de login
        }}
      />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
