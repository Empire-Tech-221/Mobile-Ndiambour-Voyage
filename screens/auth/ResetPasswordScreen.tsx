import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import styles from "../../styles/auth";
import AppTextInput from "../../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "ResetPassword">;

const ResetPasswordScreen: React.FC<Props> = ({ route, navigation: { navigate } }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showMessageInputInvalid, setShowMessageInputInvalid] = useState(false);
  const [showMessageConfirmPassword, setShowMessageConfirmPassword] = useState(false);

  const { phoneNumber }: any = route.params;

  const handleSubmit = () => {
    let isValid = true;

    if (password.trim() === "") {
      setShowMessageInputInvalid(true);
      isValid = false;
    } else {
      setShowMessageInputInvalid(false);
    }

    if (password.trim() !== confirmPassword.trim()) {
      setShowMessageConfirmPassword(true);
      isValid = false;
    } else {
      setShowMessageConfirmPassword(false);
    }

    if (isValid) {
      navigate("Welcome");
    }
  };

  return (
    <SafeAreaView>
      <View
        style={styles.viewAuth}
      >
        <View
          style={styles.viewAuthHeader}
        >
          <Text
            style={styles.viewAuthTextHeader}
          >
            Réinitialiser le mot de passe
          </Text>
          <Text
            style={styles.logoAuth}
          >
            Logo
          </Text>
        </View>
        <View
          style={styles.viewFormAuth}
        >
          <AppTextInput placeholder="Nouveau Mot de passe" secureTextEntry={true} onChangeText={setPassword} />
          {showMessageInputInvalid ?
            (<Text
              style={styles.inputInvalide}
            >
              Mot de pass requis</Text>) : false}
          <AppTextInput placeholder="Nouveau Mot de passe confirmation" secureTextEntry={true} onChangeText={setConfirmPassword} />
          {showMessageConfirmPassword ?
            (<Text
              style={styles.inputInvalide}
            >
              Les Mots de pass ne concordent pas</Text>) : false}
        </View>

        <View
          style={styles.viewButtonAuth}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.buttonAuth}
          >
            <Text
              style={styles.buttonAuthText}
            >
              Réinitialiser le mot de passe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;