import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text>OrphanageDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f",
    alignItems: "center",
    justifyContent: "center",
  },
});
