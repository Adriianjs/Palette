import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  justify-content: center;
`;

export const PaletteContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const ColorBox = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  margin-bottom: 12px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

export const ColorText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
`;

export const GenerateButton = styled(TouchableOpacity)`
  border: 2px solid #210518;
  padding: 12px 30px;
  border-radius: 25px;
  align-self: center;
  background-color: transparent;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: #210518;
  font-weight: bold;
  font-size: 16px;
`;

export const LogoutButton = styled(TouchableOpacity)`
  background-color: #210518;
  padding: 12px 30px;
  border-radius: 25px;
  align-self: center;
`;

export const LogoutButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
