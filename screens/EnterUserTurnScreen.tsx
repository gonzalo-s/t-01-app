import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { UserTurn } from "../App";

interface EnterUserTurnScreenProps {
  code: UserTurn;
  setUserTurn: (code: UserTurn) => void;
  navigation: any;
  route: any;
}

const EnterUserTurnScreen = ({
  code,
  setUserTurn,
  navigation,
}: EnterUserTurnScreenProps) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    const now = new Date();
    if (input.trim()) {
      setUserTurn({ raw: input, formatted: "", date: now });
      setMessage({
        type: "success",
        text: `Code entered at ${now.toLocaleString()}`,
      });
      setInput("");
      setTimeout(() => {
        setMessage(null);
        navigation.navigate("ViewScreen");
        setSubmitting(false);
      }, 1200);
    } else {
      setMessage({ type: "error", text: "Please enter a code." });
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your code:</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text.toUpperCase())}
        placeholder="Enter code"
        autoCapitalize="characters"
        autoCorrect={false}
        editable={!submitting}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={!input.trim() || submitting}
      />
      {message && (
        <Text
          style={[
            styles.message,
            message.type === "success" ? styles.success : styles.error,
          ]}
        >
          {message.text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  label: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#007AFF",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    fontSize: 18,
  },
  message: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  success: {
    color: "#28a745",
  },
  error: {
    color: "#dc3545",
  },
});

export default EnterUserTurnScreen;
