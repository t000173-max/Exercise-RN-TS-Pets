import { SafeAreaView, StyleSheet } from "react-native";
import PetList from "../components/PetList";
import pets from "../data/pets";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <PetList pets={pets} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdeacc",
  },
});
