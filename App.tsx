import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ScanQRScreen from "./screens/ScanQRScreen";
import ViewScreen from "./screens/ViewScreen";
import EnterUserTurnScreen from "./screens/EnterUserTurnScreen";
import Constants from "expo-constants";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  ScanQRScreen: undefined;
  ViewScreen: undefined;
  EnterUserTurnScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type Turno = {
  turno: string;
  box: string;
};

export type UserTurn = {
  raw: string;
  formatted: string;
  date: Date | null;
};

export default function App() {
  const { WS_PORT, WS_HOST } = Constants.expoConfig?.extra ?? {};

  const [qrId, setQrId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [turnos, setTurnos] = useState<Array<Turno>>();
  const [userTurn, setUserTurn] = useState<UserTurn>({
    raw: "",
    formatted: "",
    date: null,
  });
  const wsRef = useRef<WebSocket | null>(null);

  // Get WebSocket host/port from env
  const WS_URL = `ws://${WS_HOST}:${WS_PORT}`;

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connection opened");
      setIsConnected(true);
      // Send qrId if already present when connection opens
      if (qrId) {
        ws.send(qrId);
      }
    };

    ws.onmessage = (e) => {
      console.log("Message from server:", e.data);
      setTurnos(JSON.parse(e?.data).turnos);
    };

    ws.onerror = (e) => {
      console.log("WebSocket error:", e);
      setIsConnected(false);
    };

    ws.onclose = (e) => {
      console.log("WebSocket connection closed:", e.code, e.reason);
      setIsConnected(false);
    };

    return () => {
      ws.close();
    };
  }, [qrId]);

  useEffect(() => {
    // Send qrId to server when it changes and ws is open
    if (qrId && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(qrId);
    }
  }, [qrId]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerBackButtonMenuEnabled: true,
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
          children={(props) => (
            <ViewScreen
              {...props}
              qrId={qrId}
              turnos={turnos}
              code={userTurn}
            />
          )}
        />
        <Stack.Screen
          name="EnterUserTurnScreen"
          children={(props) => (
            <EnterUserTurnScreen
              {...props}
              code={userTurn}
              setUserTurn={setUserTurn}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
