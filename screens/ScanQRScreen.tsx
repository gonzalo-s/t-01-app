import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions, Camera } from "expo-camera";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type ScanQRScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ScanQRScreen"
> & {
  setQrId: (id: string | null) => void;
};

export default function ScanQRScreen({
  setQrId,
  navigation,
  route,
}: ScanQRScreenProps) {
  const [status, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  if (status === null) {
    return (
      <View style={styles.center}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }
  if (status.granted === false) {
    return (
      <View style={styles.center}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing={"back"}
        ratio="16:9"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={({ data }) => {
          console.log("🚀 ~ data:", data);
          const parsed = JSON.parse(data);
          setQrId(parsed.locationId);
          navigation.replace("ViewScreen");
        }}
      />
      <View style={styles.buttonContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    color: "#007AFF",
    fontWeight: "bold",
  },
});
