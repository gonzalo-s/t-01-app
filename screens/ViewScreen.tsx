import React from "react";
import { View, Text } from "react-native";

interface ViewScreenProps {
  qrId: string | null;
  navigation: any;
  route: any;
}

const ViewScreen = ({ qrId }: ViewScreenProps) => {
  console.log("🚀 ~ ViewScreen ~ qrId:", qrId);
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
      {qrId && (
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            display: "flex",
            width: "100%",
            backgroundColor: "#ad5454",
          }}
        >
          ID: {qrId}
        </Text>
      )}
    </View>
  );
};

export default ViewScreen;
