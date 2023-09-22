import { Dimensions, StyleSheet } from "react-native";

import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  imgIllustrator: {
    height: height / 2.5,
  },
  viewTextIllustrator: {
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 4,
  },
  textIllustrator: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
  },
  viewButton: {
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 6,
    margin: Spacing,
    alignItems: "center",
  },
  buttonRegister: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1,
    paddingHorizontal: Spacing * 1.5,
    width: "80%",
    borderRadius: Spacing * 1.5,
    shadowRadius: Spacing,
    marginBottom: Spacing,
  },
  textButtonRegister: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.medium,
    textAlign: "center",
  },
  buttonLogin: {
    backgroundColor: Colors.lightPrimary,
    paddingVertical: Spacing * 1,
    paddingHorizontal: Spacing * 1.5,
    width: "80%",
    borderRadius: Spacing * 1.5,
  },
  textButtonLogin: {
    fontFamily: Font["poppins-bold"],
    color: Colors.primary,
    fontSize: FontSize.medium,
    textAlign: "center",
  },
});

export default styles;
