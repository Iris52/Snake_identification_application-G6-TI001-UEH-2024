import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const TmKimThngTin = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.tmKimThngTin} onPress={() => navigation.navigate("Cam")}>
      <Image
        style={styles.removeBgai17246349132062Icon}
        contentFit="cover"
        source={require("../assets/removebgai-1724634913206-2.png")}
      />
      <Pressable


        style={styles.findAndReplace}
        onPress={() => navigation.navigate("TmKimThngTin1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/find-and-replace.png")}
        />
      </Pressable>
      <Image
        style={styles.fullScreenIcon}
        contentFit="cover"
        source={require("../assets/full-screen.png")}
      />
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <View style={styles.button1Parent}>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#fefae0", "#fb8500"]}
        >
          <Text style={[styles.sCu, styles.sCuTypo]}>Sơ cứu</Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/knowledge-sharing.png")}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#fefae0", "#fb8500"]}
        >
          <Text style={[styles.tmKim, styles.sCuTypo]}>Tìm Kiếm</Text>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#fefae0", "#fb8500"]}
        >
          <Text style={[styles.sCu, styles.sCuTypo]}>Lịch sử</Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/time-machine.png")}
          />
        </LinearGradient>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sCuTypo: {
    width: 65,
    position: "absolute",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    top: 8,
    left: 32,
    display: "flex",
    textAlign: "center",
    color: "#fff",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: 13,
    height: 39,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 10,
    position: "absolute",
    left: 12,
  },
  removeBgai17246349132062Icon: {
    top: 59,
    left: 0,
    width: 137,
    height: 91,
    position: "absolute",
  },
  icon: {
    bottom: 50,
    height: "100%",
    width: "100%",
  },
  findAndReplace: {
    left: 169,
    top: 698,
    width: 90,
    height: 90,
    position: "absolute",
  },
  fullScreenIcon: {
    top: 285,
    left: 105,
    width: 210,
    height: 210,
    position: "absolute",
  },
  imageIcon: {
    top: 680,
    left: 55,
    width: 55,
    height: 55,
    position: "absolute",
  },
  sCu: {
    left: 38,
    width: 52,
  },
  knowledgeSharingIcon: {
    left: 12,
  },
  button1: {
    borderRadius: Border.br_81xl,
    width: 110,
    backgroundColor: "transparent",
    height: 39,
  },
  tmKim: {
    left: 32,
    width: 63,
  },
  searchIcon: {
    left: 15,
  },
  button1Parent: {
    bottom: 0,
    left: 0,
    backgroundColor: "#f9efab",
    width: 410,
    height: 63,
    gap: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tmKimThngTin: {
    backgroundColor: Color.colorCornsilk,
    flex: 1,
    height: 917,
    overflow: "hidden",
    width: "100%",
  },
});

export default TmKimThngTin;
