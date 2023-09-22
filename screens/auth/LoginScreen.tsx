import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import styles from "../../styles/auth";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
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
              focused && styles.phoneNumberInputContainerFocused,
            ]}
            textContainerStyle={[
              styles.phoneNumberInputTextContainer,
              focused && styles.phoneNumberInputTextContainerFocused,
            ]}
            textInputStyle={[
              styles.phoneNumberInputText,
              focused && styles.phoneNumberInputTextFocused,
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
          <TextInput style={[
            styles.inputAuth,
            focused && styles.inputAuthFocus,
          ]} placeholder="Mot de passe" secureTextEntry={true} />
        </View>

        <View>
          <Text
            style={styles.textForgetPassword}
            onPress={() => navigate("ForgetPassword")}
          >
            Mot de passe oublié ?
          </Text>
        </View>
        <View
          style={styles.viewButtonAuth}>
          <TouchableOpacity
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
          onPress={() => navigate("Register")}
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