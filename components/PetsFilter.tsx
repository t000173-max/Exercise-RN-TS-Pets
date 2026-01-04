import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";

type Props = {
  query: string;
  onChangeQuery: (query: string) => void;
  type: "" | "cat" | "dog" | "rabbit";
  onChangeType: (type: "" | "cat" | "dog" | "rabbit") => void;
};

const PetsFilter = ({ query, onChangeQuery, type, onChangeType }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search pets by name..."
        value={query}
        onChangeText={onChangeQuery}
      />
      
      <View style={styles.filterButtons}>
        <TouchableOpacity
          style={[styles.filterButton, type === "" && styles.filterButtonActive]}
          onPress={() => onChangeType("")}
        >
          <Text style={[styles.filterButtonText, type === "" && styles.filterButtonTextActive]}>
            All
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.filterButton, type === "cat" && styles.filterButtonActive]}
          onPress={() => onChangeType("cat")}
        >
          <Text style={[styles.filterButtonText, type === "cat" && styles.filterButtonTextActive]}>
            Cat
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.filterButton, type === "dog" && styles.filterButtonActive]}
          onPress={() => onChangeType("dog")}
        >
          <Text style={[styles.filterButtonText, type === "dog" && styles.filterButtonTextActive]}>
            Dog
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.filterButton, type === "rabbit" && styles.filterButtonActive]}
          onPress={() => onChangeType("rabbit")}
        >
          <Text style={[styles.filterButtonText, type === "rabbit" && styles.filterButtonTextActive]}>
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
    backgroundColor: "#f9e3be",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  filterButtons: {
    flexDirection: "row",
    gap: 8,
  },
  filterButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  filterButtonActive: {
    backgroundColor: "#4ade80",
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
});

