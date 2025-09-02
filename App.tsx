import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ScanQRScreen from "./screens/ScanQRScreen";
import ViewScreen from "./screens/ViewScreen";
import EnterCodeScreen from "./screens/EnterCodeScreen";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  ScanQRScreen: undefined;
  ViewScreen: undefined;
  EnterCodeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [qrId, setQrId] = React.useState<string | null>(null);
  console.log("🚀 ~ App ~ qrId:", qrId);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My First App" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About" }}
        />
        <Stack.Screen
          name="ScanQRScreen"
          children={(props) => <ScanQRScreen {...props} setQrId={setQrId} />}
        />
        <Stack.Screen
          name="ViewScreen"
          children={(props) => <ViewScreen {...props} qrId={qrId} />}
        />
        <Stack.Screen name="EnterCodeScreen" component={EnterCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
