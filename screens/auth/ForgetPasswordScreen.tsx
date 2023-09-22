import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import styles from "../../styles/auth";

type Props = NativeStackScreenProps<RootStackParamList, "ForgetPassword">;

const ForgetPasswordScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [focused, setFocused] = useState<boolean>(false);
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
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="SN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            placeholder="Numéro de téléphone"
            containerStyle={[
              styles.phoneNumberInputContainer,
              //   focused && styles.phoneNumberInputContainerFocused,
            ]}
            textContainerStyle={[
              styles.phoneNumberInputTextContainer,
              //   focused && styles.phoneNumberInputTextContainerFocused,
            ]}
            textInputStyle={[
              styles.phoneNumberInputText,
              //   focused && styles.phoneNumberInputTextFocused,
            ]}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
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
            onPress={() => navigate("VerifyOTP", { phoneNumber: formattedValue })}
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
          onPress={() => navigate("Login")}
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