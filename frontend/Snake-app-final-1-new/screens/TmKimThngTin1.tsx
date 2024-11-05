import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const TmKimThngTin1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.tmKimThngTin, styles.image1IconLayout]}>
      <Image
        style={styles.removeBgai17246349132062Icon}
        contentFit="cover"
        source={require("../assets/removebgai-1724634913206-2.png")}
      />
      <Pressable
        style={styles.findAndReplace}
        onPress={() => navigation.navigate("TmKimThngTin")}
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
      <View style={styles.tmKimThngTinInner}>
        <LinearGradient
          style={styles.componentChild}
          locations={[0, 0.99]}
          colors={["#b9ecbc", "#fefae0"]}
        />
      </View>
      <View style={styles.image1Parent}>
        <Image
          style={[styles.image1Icon, styles.image1IconLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={styles.component1}>
          <Text style={styles.tnRn}>Tên rắn</Text>
          <View style={[styles.text, styles.textLayout]}>
            <Text style={styles.jawaTimurIndonesia}>Jawa Timur, Indonesia</Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia1, styles.jawaLayout]}>
            Jawa Timur, Indonesia
          </Text>
          <Text style={[styles.jawaTimurIndonesia2, styles.jawaLayout]}>
            Jawa Timur, Indonesia
          </Text>
          <View style={[styles.text1, styles.textLayout]}>
            <Text style={styles.jawaTimurIndonesia}>Jawa Timur, Indonesia</Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia4, styles.jawaLayout]}>
            Jawa Timur, Indonesia
          </Text>
          <Text style={[styles.jawaTimurIndonesia5, styles.jawaLayout]}>
            Jawa Timur, Indonesia
          </Text>
        </View>
      </View>
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
          <Text style={[styles.tmKim, styles.sCuTypo]}>Tìm kiếm</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  textLayout: {
    flexDirection: "row",
    width: "89.08%",
    height: "9.89%",
    position: "absolute",
  },
  jawaLayout: {
    width: "99.3%",
    display: "flex",
    color: Color.subtleDark,
    fontFamily: FontFamily.redactedScriptRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    height: "9.89%",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
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
    height: "100%",
    width: "100%",
  },
  findAndReplace: {
    left: 180,
    top: 200,
    width: 70,
    height: 70,
    position: "absolute",
  },
  fullScreenIcon: {
    top: 50,
    left: 130,
    width: 160,
    height: 160,
    position: "absolute",
  },
  imageIcon: {
    top: 210,
    left: 46,
    width: 50,
    height: 50,
    position: "absolute",
  },
  componentChild: {
    right: "0%",
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorForestgreen,
    borderWidth: 2,
    backgroundColor: "transparent",
    top: -90,
    left: "0%",
    height: "123%",
    position: "absolute",
    width: "100%",
  },
  tmKimThngTinInner: {
    top: 360,
    left: -9,
    height: 389,
    width: 430,
    position: "absolute",
  },
  image1Icon: {
    alignSelf: "stretch",
    maxWidth: "90%",
    height: 187,
    left: 30,
  },
  tnRn: {
    height: "10.62%",
    width: "33.45%",
    fontSize: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    top: "0%",
    position: "absolute",
    left: 105,
  },
  jawaTimurIndonesia: {
    width: 329,
    height: 27,
    display: "flex",
    color: Color.subtleDark,
    fontFamily: FontFamily.redactedScriptRegular,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    alignItems: "center",
  },
  text: {
    top: "16.85%",
    right: "10.21%",
    bottom: "73.26%",
    left: "0.7%",
  },
  jawaTimurIndonesia1: {
    top: "31.5%",
    left: "0.7%",
  },
  jawaTimurIndonesia2: {
    top: "46.15%",
    left: "0.7%",
  },
  text1: {
    top: "60.81%",
    right: "10.92%",
    bottom: "29.3%",
    left: "0%",
  },
  jawaTimurIndonesia4: {
    top: "75.46%",
    left: "0%",
  },
  jawaTimurIndonesia5: {
    top: "90.11%",
    left: "0%",
  },
  component1: {
    width: 270,
    height: 270,
  },
  image1Parent: {
    height: "40%",
    width: "69.76%",
    top: "35%",
    right: "18.01%",
    bottom: "11.55%",
    left: "12.23%",
    gap: 22,
    alignItems: "center",
    position: "absolute",
  },
  sCu: {
    left: 38,
    width: 52,
  },
  knowledgeSharingIcon: {
    left: 21,
  },
  button1: {
    borderRadius: Border.br_81xl,
    width: 110,
    height: 39,
    backgroundColor: "transparent",
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
    left: -3,
    backgroundColor: Color.colorPalegoldenrod,
    height: 70,
    gap: Gap.gap_md,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 420,
    position: "absolute",
  },
  tmKimThngTin: {
    backgroundColor: Color.colorCornsilk,
    flex: 1,
    height: 917,
  },
});

export default TmKimThngTin1;
