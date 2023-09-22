import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "ForgetPassword">;

const VerifyOTPScreen: React.FC<Props> = ({ route, navigation: { navigate } }) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    const [focused, setFocused] = useState<boolean>(false);

    const { phoneNumber }: any = route.params;
    const [otp, setOTP] = useState("");
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
        if (timeLeft === 0) {
            // Ici, vous devrez écrire du code pour renvoyer un nouveau OTP au numéro de téléphone de l'utilisateur
            // Vous pouvez utiliser une API de messagerie comme Twilio ou Nexmo pour cela
        } else {
            // Compter à rebours de 1 seconde jusqu'à ce que le temps soit écoulé
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleVerifyOTP = () => {
        // Ici, vous devrez écrire du code pour vérifier si le code OTP entré est correct
        // Si c'est le cas, naviguez vers l'écran Dashboard
        // Sinon, affichez un message d'erreur à l'utilisateur
        // navigation.navigate("ChangePassword");
    };

    const handleResendOTP = () => {
        // Ici, vous devrez écrire du code pour renvoyer un OTP au numéro de téléphone de l'utilisateur
        // Vous pouvez utiliser une API de messagerie comme Twilio ou Nexmo pour cela
        setTimeLeft(120);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
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
                        Code OTP
                    </Text>
                    <Text
                        style={styles.logoAuth}
                    >
                        Logo
                    </Text>
                </View>
                <View
                    style={styles.viewOTP}
                >
                    <Text style={styles.textSendOTP}>Entrez le code reçu par SMS</Text>
                    <Text style={styles.textSendOTPSub}>
                        Un code de vérification a été envoyé au{" "}
                        <Text style={styles.sendPhone}>{phoneNumber}</Text>
                    </Text>
                </View>
                <View
                    style={styles.viewFormAuth}
                >
                    <TextInput style={[
                        styles.inputAuth,
                        focused && styles.inputAuthFocus, ,
                    ]} placeholder="Code de vérification"
                        keyboardType="numeric"
                        value={otp}
                        onChangeText={(text) => setOTP(text)} />
                    {(showMessage && phoneInput.current?.isValidNumber(value) === false) ?
                        (<Text
                            style={styles.inputInvalide}
                        >
                            Numéro de Téléphone invalide</Text>) : false}
                </View>
                <View
                    style={styles.viewButtonAuth}>
                    <TouchableOpacity
                        onPress={() => navigate("ResetPassword", { phoneNumber: phoneNumber })}
                        style={styles.buttonAuth}
                    >
                        <Text
                            style={styles.buttonAuthText}
                        >
                            Vérifier le code
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewResendCode}>
                    <View
                        style={styles.subViewResendCode}>
                        {timeLeft !== 0 ? (
                            <Text style={styles.textResend}>
                                Renvoyer un nouveau code dans {minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </Text>
                        ) : (
                            <TouchableOpacity
                                style={styles.buttonResend}
                                onPress={handleResendOTP}
                                disabled={timeLeft !== 0}
                            >
                                <Text style={styles.textButtonResend}>Renvoyer un code</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigate("ForgetPassword")}
                    style={styles.retournButton}
                >
                    <Text
                        style={styles.textRetournButton}
                    >
                        Retour
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default VerifyOTPScreen;

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
    viewOTP: {
        marginVertical: Spacing * 3,
        alignItems: "center",
    },
    textSendOTP: {
        fontSize: FontSize.small,
        fontWeight: "bold",
        marginBottom: 10,
    },
    textSendOTPSub: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    sendPhone: {
        fontWeight: "bold",
    },
    viewFormAuth: {
        marginVertical: Spacing * 3,
        alignItems: "center",
    },
    inputInvalide: {
        color: "red"
    },
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
    viewResendCode: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    subViewResendCode: {
        padding: Spacing,
    },
    textResend: {
        fontSize: FontSize.small,
        color: "#666",
    },
    buttonResend: {
        alignSelf: "flex-end",
        marginTop: 10,
    },
    textButtonResend: {
        color: Colors.primary,
        fontWeight: "bold",
        marginVertical: Spacing,
    },
    retournButton: {
        padding: Spacing,
    },
    textRetournButton: {
        fontFamily: Font["poppins-semiBold"],
        color: Colors.text,
        textAlign: "center",
        fontSize: FontSize.small,
    }
});