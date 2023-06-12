import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal
} from "react-native";

import React, { useState } from "react";

const CustomAlert = ({ visible, title, message, onPress }) => (
  <Modal animationType="fade" visible={visible} transparent>
    <View style={styles.modalContainer}>
      <View style={styles.alertContainer}>
        <Text style={styles.alertTitle}>{title}</Text>
        <Text style={styles.alertMessage}>{message}</Text>
        <TouchableOpacity style={styles.okButton} onPress={onPress}>
          <Text style={styles.okButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);



const showAlert = () => {

  Alert.alert(
    ' a;ldma;ldmad',
    ' a;ldmaldmaldm',
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    {
      style: 'default',
      contentContainerStyle: styles.alertContentContainer,
      customView: (
        <CustomAlert
          title="Thanks for Subscribing"
          message="Stay Tuned"
          onPress={() => {
            console.log('OK Pressed');
          }}
        />
      ),
    }
  );
};



const NewsletterScreen = () => {

const [email, setEmail] = useState("");
const [isEmailValid, setisEmailValid] = useState(false);
const [isAlertVisible, setIsAlertVisible] = useState(false);

const showAlert = () => {
  setIsAlertVisible(true);
};

const hideAlert = () => {
  setIsAlertVisible(false);
  console.log('OK Pressed');
};

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.subtitle}>
        Subscribe to our newsletter for our latest delicious recepies
      </Text>
      <TextInput
        style={styles.inputField}
        placeholder="Type your email"
        onChangeText={(email) => {
          setEmail(email);
          setisEmailValid(validateEmail(email));
        }}
      ></TextInput>
      <TouchableOpacity
      style={[styles.btn, !isEmailValid && styles.disabledBtn]}
      disabled={!isEmailValid}
      onPress={showAlert}>
        <Text style={styles.btnText}>Subscribe</Text>
      </TouchableOpacity>
      <CustomAlert
        visible={isAlertVisible}
        title="Thanks for Subscribing"
        message="Stay Tuned"
        onPress={hideAlert}
      />
    </SafeAreaView>
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
  subtitle: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    width: "95%",
    padding: 5,
  },
  btn: {
    padding: 15,
    marginVertical: 20,
    backgroundColor: "#40524c",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  disabledBtn: {
    backgroundColor: "gray",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#40524c',
    textAlign: 'center',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#40524c',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 5,
  },
  okButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default NewsletterScreen;
