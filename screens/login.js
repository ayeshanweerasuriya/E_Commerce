import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/background.png")}
      />
      <Text style={styles.heading}>Audio</Text>
      <Text style={styles.secondHeading}>
        It's modular and designed to last
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../assets/mail.png")}
          />
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../assets/lock.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgetPassword}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.dHaAccount}>
        Don't have any account?
        <TouchableOpacity style={styles.sUpHere}>Sign Up here</TouchableOpacity>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  heading: {
    marginTop: 110,
    color: "white",
    fontSize: 51,
    fontWeight: "500",
  },

  secondHeading: {
    textAlign: "center",
    marginTop: 5,
    color: "white",
    fontSize: 16,
    letterSpacing: 0.2,
  },

  inputContainer: {
    marginTop: 250,
  },
  inputIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    width: 310,
    height: 50,
    backgroundColor: "white",
  },

  inputIcon: {
    marginLeft: 15,
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  input: {
    color: "#C8C8C8",
    width: "70%",
  },

  forgetPassword: {
    color: "white",
    fontWeight: "500",
  },

  signInButton: {
    marginTop: 40,
    backgroundColor: "#0ACF83",
    borderRadius: 10,
    width: 310,
    height: 50,
    justifyContent: "center",
  },

  signInButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },

  dHaAccount: {
    marginTop: 10,
    color: "white",
  },

  sUpHere: {
    marginLeft: 5,
    color: "#0ACF83",
    textDecorationLine: "underline",
  },
});
