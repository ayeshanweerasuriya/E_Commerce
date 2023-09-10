import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("./assets/background.png")}
      />
      <Text style={styles.heading}>Audio</Text>
      <Text style={styles.secondHeading}>
        It's modular and designed to last
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("./assets/mail.png")}
          />
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputIconContainer}>
          <Image
            style={styles.inputIcon}
            source={require("./assets/lock.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity style={styles.sMediaButtons}>
          <Image
            style={styles.socialMediaIcon}
            source={require("./assets/Apple.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sMediaButtons}>
          <Image
            style={styles.socialMediaIcon}
            source={require("./assets/Google.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sMediaButtons}>
          <Image
            style={styles.socialMediaIcon}
            source={require("./assets/Facebook.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.iYouHaAccount}>
        If you have an account?
        <TouchableOpacity style={styles.sInHere}>Sign In here</TouchableOpacity>
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
    marginTop: 180,
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

  signUpButton: {
    backgroundColor: "#0ACF83",
    borderRadius: 10,
    width: 310,
    height: 50,
    justifyContent: "center",
  },

  signUpButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },

  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
  },

  socialMediaIcon: {
    width: 52,
    height: 52,
    marginLeft: 15,
  },

  iYouHaAccount: {
    justifyContent: "center",
    color: "white",
  },

  sInHere: {
    marginLeft: 5,
    color: "#0ACF83",
    textDecorationLine: "underline",
  },
});
