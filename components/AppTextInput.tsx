import {
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={[
        styles.inputAuth,
        focused && styles.inputAuthFocus,
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputAuth: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    padding: Spacing * 1.5,
    backgroundColor: Colors.lightPrimary,
    borderRadius: Spacing * 1,
    marginVertical: Spacing,
    width: "95%",
  },
  inputAuthFocus: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    shadowOffset: { width: 4, height: Spacing },
    shadowColor: Colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: Spacing,
  }
});