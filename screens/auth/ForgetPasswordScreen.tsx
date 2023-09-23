import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import styles from "../../styles/auth";
import AppPhoneInput from "../../components/AppPhoneInput";

type Props = NativeStackScreenProps<RootStackParamList, "ForgetPassword">;

// type ForgetPasswordScreenProps = {
//   route: RouteProp<RootStackParamList, "ForgetPassword">;
//   navigation: NativeStackScreenProps<RootStackParamList, "ForgetPassword">;
// };

const ForgetPasswordScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const handleSubmit = () => {
    let isValid = true;

    if (!phoneInput.current?.isValidNumber(value)) {
      setShowMessage(true);
      isValid = false;
    } else {
      setShowMessage(false);
    }

    if (isValid) {
      navigate("VerifyOTP", { phoneNumber: formattedValue });
    }
  };

  const handleLogin = () => {
    navigate("Login");
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
            Mot de Passe oublié ?
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
              Envoyer un OTP
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.notAuthAction}
        >
          <Text
            style={styles.notAuthActionText}
          >
            Déja un compte ?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;