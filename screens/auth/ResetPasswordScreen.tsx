import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import styles from "../../styles/auth";

type Props = NativeStackScreenProps<RootStackParamList, "ResetPassword">;

const ResetPasswordScreen: React.FC<Props> = ({ route, navigation: { navigate } }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [focused, setFocused] = useState<boolean>(false);

  const { phoneNumber }: any = route.params;

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
          <TextInput style={[
            styles.inputAuth,
            focused && styles.inputAuthFocus,
          ]} placeholder="Nouveau Mot de passe" secureTextEntry={true} />
          <TextInput style={[
            styles.inputAuth,
            focused && styles.inputAuthFocus,
          ]} placeholder="Nouveau Mot de passe confirmation" secureTextEntry={true} />
        </View>

        <View
          style={styles.viewButtonAuth}>
          <TouchableOpacity
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