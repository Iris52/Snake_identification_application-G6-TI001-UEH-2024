import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Page2giiThiuApp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.page2giiThiuApp}
      onPress={() => navigation.navigate("NhnBitSCu")}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/page2giithiuapp.png")}
      >
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    flexDirection: "row",
    height: 27,
    position: "absolute",
  },

  viperLayout: {
    width: 288,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.rasaBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0,
    height: 27,
    position: "absolute",
  },
  choMngBn: {
    width: 357,
  },
  text: {
    top: 221,
    left: 79,
    width: 344,
  },
  viper: {
    marginLeft: -133,
    top: 372,
    left: "50%",
    fontSize: 96,
    textAlign: "center",
    justifyContent: "center",
  },
  phnBitCc: {
    width: 329,
  },
  text1: {
    top: 568,
    left: 88,
    width: 303,
  },
  icon: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  page2giiThiuApp: {
    height: 1067,
    width: "100%",
  },
});

export default Page2giiThiuApp;
