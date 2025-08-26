// import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Note Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default NoteScreen;
