import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import type { Pet } from "../data/pets";
import PetItem from "./PetItem";
import PetsFilter from "./PetsFilter";

type Props = {
  pets: Pet[];
};

const PetsList = ({ pets }: Props) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"" | "cat" | "dog" | "rabbit">("");

  // Optional debugging:
  // console.log("query:", query);
  // console.log("type:", type);

  const filteredPets = useMemo(() => {
    const q = query.trim().toLowerCase();

    return pets
      .filter((pet) => pet.name.toLowerCase().includes(q)) // ✅ case-insensitive
      .filter((pet) => {
        if (type === "") return true;
        // Handle case-insensitive comparison
        return pet.type.toLowerCase() === type.toLowerCase();
      });
  }, [pets, query, type]);

  return (
    <View style={styles.container}>
      <PetsFilter
        query={query}
        onChangeQuery={setQuery}
        type={type}
        onChangeType={setType}
      />

      <FlatList
        data={filteredPets}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PetItem pet={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default PetsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
});
