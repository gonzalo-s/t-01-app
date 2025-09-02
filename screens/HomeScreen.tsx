import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { RootStackParamList } from "../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Button
        title="Escanear QR"
        onPress={() => navigation.navigate("ScanQRScreen")}
      />
      <Button
        title="Ver pantalla"
        onPress={() => navigation.navigate("ViewScreen")}
      />
      <Button
        title="Ingresar codigo de turno"
        onPress={() => navigation.navigate("EnterCodeScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f8f9fa",
  },
});
