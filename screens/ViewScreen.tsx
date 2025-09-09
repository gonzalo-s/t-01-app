import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UserTurn, Turno, RootStackParamList } from "../App";

type ViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ViewScreen"
> & {
  qrId: string | null;
  turnos: Array<Turno>;
  code: UserTurn;
};

const ViewScreen = ({ navigation, qrId, turnos, code }: ViewScreenProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "90%",
        height: "90%",
        margin: "auto",
        backgroundColor: "#a5f09e",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Live View</Text>
      {qrId && <Text style={styles.textDefault}>ID: {qrId}</Text>}
      {code ? <Text style={styles.textDefault}>Code: {code.raw}</Text> : null}
      {turnos && turnos.length > 0 ? (
        turnos.map((turno, index) => (
          <Text style={styles.textDefault} key={index}>
            Turno: {turno.turno} Box: {turno.box}
          </Text>
        ))
      ) : (
        <Text>No turnos available</Text>
      )}
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  textDefault: {
    marginTop: 20,
    fontSize: 18,
    display: "flex",
    width: "100%",
  },
});
