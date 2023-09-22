import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumberInputContainer: {
    width: "95%",
    backgroundColor: Colors.lightPrimary,
    borderRadius: Spacing * 1,
    marginVertical: Spacing,
    borderColor: Colors.primary,
  },
  phoneNumberInputContainerFocused: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    shadowOffset: { width: 4, height: Spacing },
    shadowColor: Colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: Spacing,
  },
  phoneNumberInputTextContainer: {
    padding: Spacing * 1.5,
  },
  phoneNumberInputTextContainerFocused: {},
  phoneNumberInputText: {
    fontFamily: Font['poppins-regular'],
    fontSize: FontSize.small,
    color: 'black',
  },
  phoneNumberInputTextFocused: {
    borderColor: "red",
  },
  viewAuth: {
    padding: Spacing * 2,
  },
  viewAuthHeader: {
    alignItems: "center",
  },
  viewAuthTextHeader: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3,
  },
  logoAuth: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.large,
    maxWidth: "60%",
    textAlign: "center",
  },
  viewFormAuth: {
    marginVertical: Spacing * 3,
    alignItems: "center",
  },
  inputInvalide: {
    color: "red"
  },
  viewButtonAuth: {
    alignItems: "center",
  },
  buttonAuth: {
    padding: Spacing * 1,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 3,
    borderRadius: Spacing * 1.5,
    shadowColor: Colors.primary,
    width: "70%",
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowRadius: Spacing,
  },
  buttonAuthText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.medium,
  },
  notAuthAction: {
    padding: Spacing,
  },
  notAuthActionText: {
    fontFamily: Font["poppins-semiBold"],
    color: Colors.text,
    textAlign: "center",
    fontSize: FontSize.small,
  }
});