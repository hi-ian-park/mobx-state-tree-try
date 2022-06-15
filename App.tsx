import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { types } from "mobx-state-tree";
import { observer } from "mobx-react";
import styled from "styled-components/native";
import Todo from "./screens/Todo";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
