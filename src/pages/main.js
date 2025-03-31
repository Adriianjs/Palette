import React, { useState, useEffect } from "react";
import { Alert, ActivityIndicator } from "react-native";
import {
  Container,
  PaletteContainer,
  ColorBox,
  ColorText,
  GenerateButton,
  ButtonText,
  LogoutButton,
  LogoutButtonText,
  LoadingContainer,
} from "../styles";
import { generatePalette } from "../services/api";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const [palette, setPalette] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchPalette = async () => {
    setLoading(true);
    try {
      const colors = await generatePalette();
      setPalette(colors);
    } catch (error) {
      Alert.alert("Erro", "Falha ao gerar paleta");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPalette();
  }, []);

  const copyToClipboard = (hex) => {
    Alert.alert("Cor copiada!", hex);
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#210518" />
        </LoadingContainer>
      ) : (
        <>
          <PaletteContainer>
            {palette.map((color, index) => (
              <ColorBox
                key={index}
                onPress={() => copyToClipboard(color)}
                style={{ backgroundColor: color }}
              >
                <ColorText>{color}</ColorText>
              </ColorBox>
            ))}
          </PaletteContainer>

          <GenerateButton onPress={fetchPalette}>
            <ButtonText>GERAR PALETA</ButtonText>
          </GenerateButton>

          <LogoutButton onPress={handleLogout}>
            <LogoutButtonText>SAIR</LogoutButtonText>
          </LogoutButton>
        </>
      )}
    </Container>
  );
};

export default Main;
