import React, { useState, useEffect } from "react";
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

type Props = NativeStackScreenProps<RootStackParamList, "ForgetPassword">;

const VerifyOTPScreen: React.FC<Props> = ({ route, navigation: { navigate } }) => {
    const [showMessageInputInvalid, setShowMessageInputInvalid] = useState(false);

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
        let isValid = true;


        if (otp.trim() === "") {
            setShowMessageInputInvalid(true);
            isValid = false;
        }

        if (isValid) {
            setShowMessageInputInvalid(false);
            navigate("ResetPassword", { phoneNumber: phoneNumber });
        }
    };

    const handleResendOTP = () => {
        setTimeLeft(120);
    };

    const handleReturn = () => {
        navigate("ForgetPassword")
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
                    <AppTextInput placeholder="Code de vérification" keyboardType="numeric" value={otp} onChangeText={(text) => setOTP(text)} />
                    {showMessageInputInvalid ?
                        (<Text
                            style={styles.inputInvalide}
                        >
                            Veuillez saisir le code</Text>) : false}
                </View>
                <View
                    style={styles.viewButtonAuth}>
                    <TouchableOpacity
                        onPress={handleVerifyOTP}
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
                    onPress={handleReturn}
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