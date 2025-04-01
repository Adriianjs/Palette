import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Main from "./pages/main"; 
import GerarCor from "./pages/gerarCor";
import GerarPaleta from "./pages/gerarPaleta"; 

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: "Menu Principal",
          headerLeft: null, 
        }}
      />

      <Stack.Screen
        name="GerarCor"
        component={GerarCor}
        options={{ title: "Gerador de Cor Única" }}
      />

      <Stack.Screen
        name="GerarPaleta"
        component={GerarPaleta} 
        options={{ title: "Gerador de Paleta" }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ title: "Cadastro de Usuário" }}
      />
    </Stack.Navigator>
  );
}
