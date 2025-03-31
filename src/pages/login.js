import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user");
    if (!user) {
      alert("Nenhum usuário cadastrado!");
      return;
    }
    const userJson = JSON.parse(user);
    if (userJson.email === email && userJson.password === password) {
      navigation.navigate("Main");
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  const handleCadastro = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PALLETE</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCadastro}>
        <Text style={styles.registerText}>CADASTRAR-SE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: "80%",
    paddingVertical: 5,
    marginVertical: 10,
    fontSize: 14,
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#28A9E1",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  registerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 10,
  },
  continueText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginTop: 30,
  },
});

export default Login;
