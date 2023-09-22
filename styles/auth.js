import { StyleSheet } from "react-native";

import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    color: "black",
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
    color: "red",
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
  textForgetPassword: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: "flex-end",
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
  },
});
export default styles;
