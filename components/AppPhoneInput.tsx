import React, { useState, useRef, forwardRef } from "react";
import { StyleSheet } from "react-native";
import PhoneInput, { PhoneInputProps } from "react-native-phone-number-input";

import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";


const AppPhoneInput = forwardRef<PhoneInput, PhoneInputProps>(({...otherProps}, ref) => {
    const [focused, setFocused] = useState<boolean>(false);
    
    return (
        <PhoneInput
            ref={ref}
            defaultCode="SN"
            layout="first"
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
            {...otherProps}
        />
    );
});

const styles = StyleSheet.create({
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
        fontFamily: Font["poppins-regular"],
        fontSize: FontSize.small,
        color: "black",
    },
    phoneNumberInputTextFocused: {
        borderColor: "red",
    }
})

export default AppPhoneInput;