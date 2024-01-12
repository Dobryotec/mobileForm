import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const Form = () => {
  const [typeForm, setTypeForm] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isShowPassowrd, setIsShowPassword] = useState(false);

  const changeTypeForm = (typeForm) => {
    setTypeForm(typeForm);
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setIsShowPassword(false);
  };

  const showPassowrd = () => {
    setIsShowPassword(!isShowPassowrd);
  };

  const validateEmail = (text) => {
    if (!text.includes("@")) {
      setEmailError("Invalid email address");
    } else setEmailError("");
  };

  const validatePassword = (text) => {
    if (text.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else setPasswordError("");
  };

  const handleSubmit = () => {
    validateEmail(email);
    validatePassword(password);

    if (emailError && passwordError) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <Text style={styles.title}>Welcome to application</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => changeTypeForm("signIn")}
          >
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => changeTypeForm("signUp")}
          >
            <Text style={styles.text}>New account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="rgba(209, 209, 213, 0.948)"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />

          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={
              typeForm === "signIn" ? "Enter password" : "Create password"
            }
            placeholderTextColor="rgba(209, 209, 213, 0.767)"
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!isShowPassowrd}
          />
          <TouchableOpacity onPress={showPassowrd} style={styles.icon}>
            {isShowPassowrd ? (
              <Entypo
                name="eye-with-line"
                size={24}
                color="rgba(209, 209, 213, 0.767)"
              />
            ) : (
              <Entypo name="eye" size={24} color="rgba(209, 209, 213, 0.767)" />
            )}
          </TouchableOpacity>
          {passwordError && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.text}>
              {typeForm === "signIn" ? "Sign in" : "Sign up"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    textAlign: "center",
    color: "rgb(0, 106, 255)",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
  },
  inputContainer: {
    position: "relative",
    width: "90%",
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    columnGap: 20,
  },

  input: {
    fontFamily: "open-sans-medium",
    fontSize: 16,
    backgroundColor: "rgb(246, 246, 250)",
    borderWidth: 1,
    borderColor: "rgb(209, 209, 213)",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginHorizontal: "0 auto",
    width: "100%",
    color: "rgb(0, 106, 255)",
  },
  button: {
    padding: 12,
    backgroundColor: "rgb(0, 106, 255)",
    borderRadius: 4,
    width: "45%",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  errorText: {
    fontFamily: "open-sans-bold",
    color: "red",
    marginTop: 6,
  },
  icon: {
    position: "absolute",
    top: 9,
    right: 20,
  },
});

export default Form;
