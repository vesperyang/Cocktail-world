import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../components/input"
import WithOut from"../components/without"
export default function Login() {
  return (
    <TouchableOpacity style={styles.container}>
      <Input />
      <Text style={styles.Login}>Log in</Text>
      <WithOut />
    </TouchableOpacity>  
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  Login: {
    fontSize: 18,
    backgroundColor: "lightblue",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});