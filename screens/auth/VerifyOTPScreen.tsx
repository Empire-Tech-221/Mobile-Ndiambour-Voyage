import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import styles from "../../styles/auth";

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
                        focused && styles.inputAuthFocus,
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