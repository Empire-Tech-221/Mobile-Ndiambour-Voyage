import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

import styles from "../styles/welcome";

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