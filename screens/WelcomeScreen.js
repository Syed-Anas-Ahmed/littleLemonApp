import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Little Lemon</Text>
      <Text style={styles.subtitle}>Your local Mediterranean Bistro</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Newsletter")}
        
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#FFC107",
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default WelcomeScreen;
