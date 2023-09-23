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
import AppTextInput from "../../components/AppTextInput";
import AppPhoneInput from "../../components/AppPhoneInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageInputName, setShowMessageInputName] = useState(false);
  const [showMessageInputInvalid, setShowMessageInputInvalid] = useState(false);
  const [showMessageConfirmPassword, setShowMessageConfirmPassword] = useState(false);
  
  const phoneInput = useRef<PhoneInput>(null);

  const handleLogin = () => {
    navigate("Login");
  };

  const ChangeTextPhoneInput = (text: string) => {
    setValue(text);
  };

  const ChangeFormattedTextPhoneInput = (text: string) => {
    setFormattedValue(text);
  };

  const handleSubmit = () => {
    // navigate("Login");
    let isValid = true;

    if (!phoneInput.current?.isValidNumber(value)) {
      setShowMessage(true);
      isValid = false;
    } else {
      setShowMessage(false);
    }

    if (name.trim() === "") {
      setShowMessageInputName(true);
      isValid = false;
    } else {
      setShowMessageInputName(false);
    }

    if (password.trim() === "") {
      setShowMessageInputInvalid(true);
      isValid = false;
    } else {
      setShowMessageInputInvalid(false);
    }

    // Vérification du champ de confirmation de mot de passe
    if (password.trim() !== confirmPassword.trim()) {
      setShowMessageConfirmPassword(true);
      isValid = false;
    } else {
      setShowMessageConfirmPassword(false);
    }

    if (isValid) {
      // Toutes les validations sont réussies, naviguer vers l'écran de connexion
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
            Inscription
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
          <AppTextInput placeholder="Prenom Nom" onChangeText={setName} />
          {showMessageInputName ?
            (<Text
              style={styles.inputInvalide}
            >
              Votre Nom requis</Text>) : false}
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
          <AppTextInput placeholder="Mot de passe confirmation" secureTextEntry={true} onChangeText={setConfirmPassword} />
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
              S'inscrire
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

export default RegisterScreen;