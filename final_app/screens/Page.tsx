import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Page = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.page1}
      onPress={() => navigation.navigate("Page2giiThiuApp")}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/page1.png")}
      >
        
        
        <View style={styles.page1Child} />
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  viperTypo: {
    textAlign: "left",
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  
  
  ngDngNhn: {
    marginLeft: -156,
    bottom: 337,
    fontSize: 24,
    width: 341,
    height: 29,
  },
  removeBgai17246349132061Icon: {
    top: 154,
    left: -67,
    width: 564,
    height: 376,
    position: "absolute",
  },
  page1Child: {
    top: 770,
    left: 117,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  page1: {
    height: 932,
    width: "100%",
  },
});

export default Page;
