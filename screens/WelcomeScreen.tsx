import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const handleLogin = () => {
    navigate("Login");
  };

  const handleRegister = () => {
    navigate("Register");
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.imgIllustrator}
          resizeMode="contain"
          source={require("../assets/images/bus.jpg")}
        />
        <View
          style={styles.viewTextIllustrator}
        >
          <Text
            style={styles.textIllustrator}
          >
            Découvrez, réservez en un clic !
          </Text>
        </View>
        <View
          style={styles.viewButton}
        >
          <TouchableOpacity
            onPress={handleRegister}
            style={styles.buttonRegister}
          >
            <Text
              style={styles.textButtonRegister}
            >
              Créer un compte
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.buttonLogin}
          >
            <Text
              style={styles.textButtonLogin}
            >
              Se connecter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imgIllustrator: {
    height: height / 2.5,
  },
  viewTextIllustrator: {
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 4,
  },
  textIllustrator: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
  },
  viewButton: {
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 6,
    margin: Spacing,
    alignItems: "center",
  },
  buttonRegister: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1,
    paddingHorizontal: Spacing * 1.5,
    width: "80%",
    borderRadius: Spacing * 1.5,
    shadowRadius: Spacing,
    marginBottom: Spacing,
  },
  textButtonRegister: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.medium,
    textAlign: "center",
  },
  buttonLogin: {
    backgroundColor: Colors.lightPrimary,
    paddingVertical: Spacing * 1,
    paddingHorizontal: Spacing * 1.5,
    width: "80%",
    borderRadius: Spacing * 1.5,
  },
  textButtonLogin: {
    fontFamily: Font["poppins-bold"],
    color: Colors.primary,
    fontSize: FontSize.medium,
    textAlign: "center",
  }
});