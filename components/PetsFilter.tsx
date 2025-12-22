import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  query: string;
  onChangeQuery: (query: string) => void;
  type: "" | "cat" | "dog" | "rabbit";
  onChangeType: (type: "" | "cat" | "dog" | "rabbit") => void;
};

const PetsFilter = ({
  query,
  onChangeQuery,
  type,
  onChangeType,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search pets..."
        value={query}
        onChangeText={onChangeQuery}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, type === "" && styles.buttonActive]}
          onPress={() => onChangeType("")}
        >
          <Text style={[styles.buttonText, type === "" && styles.buttonTextActive]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, type === "cat" && styles.buttonActive]}
          onPress={() => onChangeType("cat")}
        >
          <Text style={[styles.buttonText, type === "cat" && styles.buttonTextActive]}>
            Cat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, type === "dog" && styles.buttonActive]}
          onPress={() => onChangeType("dog")}
        >
          <Text style={[styles.buttonText, type === "dog" && styles.buttonTextActive]}>
            Dog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, type === "rabbit" && styles.buttonActive]}
          onPress={() => onChangeType("rabbit")}
        >
          <Text style={[styles.buttonText, type === "rabbit" && styles.buttonTextActive]}>
            Rabbit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PetsFilter;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  buttonActive: {
    backgroundColor: "#4ade80",
    borderColor: "#22c55e",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  buttonTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
});

