import {
    SafeAreaView,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../../types";
  
  import styles from "../../styles/welcome";
  
  type Props = NativeStackScreenProps<RootStackParamList, "Profil">;
  
  const ProfilScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const handleLogin = () => {
      navigate("Login");
    };
  
    const handleRegister = () => {
      navigate("Register");
    };
  
    return (
      <SafeAreaView>
        <View>
        <Text
                style={styles.textButtonLogin}
              >
                Profil
              </Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProfilScreen;