import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/auth";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppTextInput from "../../components/AppTextInput";
import AppPhoneInput from "../../components/AppPhoneInput";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const phoneInput = useRef<PhoneInput>(null);
  const [password, setPassword] = useState("");

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageInputInvalid, setShowMessageInputInvalid] = useState(false);

  const handleForgetPassword = () => {
    navigate("ForgetPassword");
  };

  const handleRegister = () => {
    navigate("Register");
  };

  const handleSubmit = () => {
    let isValid = true;
    let checkPhoneValid = phoneInput.current?.isValidNumber(value)

    if (!checkPhoneValid) {
      setShowMessage(true);
      isValid = false;
    } else {
      setShowMessage(false);
    }

    if (password.trim() === "") {
      setShowMessageInputInvalid(true);
      isValid = false;
    } else {
      setShowMessageInputInvalid(false);
    }

    if (isValid) {
      navigate("Welcome");
    }
  };

  const ChangeTextPhoneInput = (text: string) => {
    setValue(text);
  };

  const ChangeFormattedTextPhoneInput = (text: string) => {
    setFormattedValue(text);
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
            Connexion
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
          <AppPhoneInput
            defaultValue={value}
            placeholder="Numéro de téléphone"
            onChangeText={ChangeTextPhoneInput}
            onChangeFormattedText={ChangeFormattedTextPhoneInput}
            ref={phoneInput}
          />
          {(showMessage && phoneInput.current?.isValidNumber(value) === false) ?
            (<Text
              style={styles.inputInvalide}
            >
              Numéro de Téléphone invalide</Text>) : false}
          <AppTextInput placeholder="Mot de passe" secureTextEntry={true} onChangeText={setPassword} />
          {showMessageInputInvalid ?
            (<Text
              style={styles.inputInvalide}
            >
              Mot de pass requis</Text>) : false}
        </View>

        <View>
          <Text
            style={styles.textForgetPassword}
            onPress={handleForgetPassword}
          >
            Mot de passe oublié ?
          </Text>
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
              Connexion
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.notAuthAction}
        >
          <Text
            style={styles.notAuthActionText}
          >
            Pas encore de compte ?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;