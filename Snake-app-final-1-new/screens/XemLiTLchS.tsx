import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const XemLiTLchS = () => {
  return (
    <View style={[styles.xemLiTLchS, styles.xemLiTLchSLayout]}>
      <Image
        style={styles.removeBgai17246349132062Icon}
        contentFit="cover"
        source={require("../assets/removebgai-1724634913206-2.png")}
      />
      <View style={styles.button1Parent}>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#fefae0", "#fb8500"]}
        >
          <Text style={[styles.sCu, styles.sCuTypo]}>{`Sơ cứu `}</Text>
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
      <Text style={[styles.jawaTimurIndonesia, styles.jawaLayout1]}>
        Jawa Timur, Indonesia
      </Text>
      <Text style={[styles.jawaTimurIndonesia1, styles.jawaLayout1]}>
        Jawa Timur, Indonesia
      </Text>
      <View style={styles.component8Parent}>
        <View style={styles.component8}>
          <Text style={[styles.tnRn, styles.tnRnFlexBox]}>Tên rắn</Text>
          <Image
            style={[styles.image5Icon, styles.xemLiTLchSLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
        </View>
        <View style={styles.component7}>
          <View style={[styles.text, styles.textPosition]}>
            <Text style={[styles.jawaTimurIndonesia2, styles.tnRnFlexBox]}>
              Jawa Timur, Indonesia
            </Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia3, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
          <Text style={[styles.jawaTimurIndonesia4, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
          <View style={[styles.text1, styles.textLayout]}>
            <Text style={[styles.jawaTimurIndonesia2, styles.tnRnFlexBox]}>
              Jawa Timur, Indonesia
            </Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia6, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
          <Text style={[styles.jawaTimurIndonesia7, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
          <View style={[styles.text2, styles.textLayout1]}>
            <Text style={[styles.jawaTimurIndonesia2, styles.tnRnFlexBox]}>
              Jawa Timur, Indonesia
            </Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia9, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
          <View style={[styles.text3, styles.jawaPosition]}>
            <Text style={[styles.jawaTimurIndonesia2, styles.tnRnFlexBox]}>
              Jawa Timur, Indonesia
            </Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia11, styles.jawaPosition]}>
            Jawa Timur, Indonesia
          </Text>
          <Text style={[styles.jawaTimurIndonesia12, styles.jawaPosition]}>
            Jawa Timur, Indonesia
          </Text>
          <View style={[styles.text4, styles.textLayout]}>
            <Text style={[styles.jawaTimurIndonesia2, styles.tnRnFlexBox]}>
              Jawa Timur, Indonesia
            </Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia14, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
          <Text style={[styles.jawaTimurIndonesia15, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
          <View style={[styles.text5, styles.textPosition]}>
            <Text style={[styles.jawaTimurIndonesia2, styles.tnRnFlexBox]}>
              Jawa Timur, Indonesia
            </Text>
          </View>
          <Text style={[styles.jawaTimurIndonesia17, styles.jawaTypo]}>
            Jawa Timur, Indonesia
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  xemLiTLchSLayout: {
    overflow: "hidden",
    width: "100%",
  },
  sCuTypo: {
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    top: 0,
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 17,
    width: 17,
    top: 11,
    position: "absolute",
  },
  jawaLayout1: {
    height: 33,
    width: 297,
    left: 65,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.redactedScriptRegular,
    lineHeight: 50,
    fontSize: FontSize.size_11xl,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
  },
  tnRnFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  textPosition: {
    right: "11.67%",
    left: "1.67%",
    width: "86.67%",
    height: "4.29%",
    flexDirection: "row",
    position: "absolute",
  },
  jawaTypo: {
    width: "96.67%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.redactedScriptRegular,
    lineHeight: 50,
    fontSize: FontSize.size_11xl,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
  },
  textLayout: {
    width: "87%",
    height: "4.29%",
    flexDirection: "row",
    position: "absolute",
  },
  textLayout1: {
    width: "86.67%",
    flexDirection: "row",
  },
  jawaPosition: {
    left: "3.33%",
    height: "4.29%",
    position: "absolute",
  },
  removeBgai17246349132062Icon: {
    top: 20,
    left: -4,
    width: 137,
    height: 91,
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
    top: 847,
    left: -9,
    backgroundColor: Color.colorPalegoldenrod,
    width: 430,
    height: 70,
    gap: Gap.gap_md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  jawaTimurIndonesia: {
    top: 934,
  },
  jawaTimurIndonesia1: {
    top: 983,
  },
  tnRn: {
    height: "10.98%",
    width: "35.32%",
    top: "89.02%",
    left: "33.46%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  image5Icon: {
    height: "76.89%",
    right: "0%",
    bottom: "23.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  component8: {
    width: 269,
    height: 264,
  },
  jawaTimurIndonesia2: {
    width: 329,
    height: 27,
    fontFamily: FontFamily.redactedScriptRegular,
    lineHeight: 50,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    color: Color.colorBlack,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
  },
  text: {
    bottom: "95.71%",
    left: "1.67%",
    top: "0%",
  },
  jawaTimurIndonesia3: {
    top: "6.37%",
    left: "1.67%",
    height: "4.29%",
    position: "absolute",
  },
  jawaTimurIndonesia4: {
    top: "12.74%",
    left: "1.67%",
    height: "4.29%",
    position: "absolute",
  },
  text1: {
    top: "18.99%",
    right: "13%",
    bottom: "76.72%",
    left: "0%",
  },
  jawaTimurIndonesia6: {
    top: "25.36%",
    height: "4.29%",
    position: "absolute",
    left: "0%",
  },
  jawaTimurIndonesia7: {
    top: "31.73%",
    height: "4.29%",
    position: "absolute",
    left: "0%",
  },
  text2: {
    top: "38.23%",
    right: "13.33%",
    bottom: "57.48%",
    height: "4.29%",
    position: "absolute",
    left: "0%",
  },
  jawaTimurIndonesia9: {
    top: "44.6%",
    height: "4.29%",
    position: "absolute",
    left: "0%",
  },
  text3: {
    top: "51.11%",
    right: "10%",
    bottom: "44.6%",
    width: "86.67%",
    flexDirection: "row",
  },
  jawaTimurIndonesia11: {
    top: "57.48%",
    width: "96.67%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.redactedScriptRegular,
    lineHeight: 50,
    fontSize: FontSize.size_11xl,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
  },
  jawaTimurIndonesia12: {
    top: "63.85%",
    width: "96.67%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.redactedScriptRegular,
    lineHeight: 50,
    fontSize: FontSize.size_11xl,
    display: "flex",
    letterSpacing: 0,
    alignItems: "center",
  },
  text4: {
    top: "70.09%",
    right: "11.33%",
    bottom: "25.62%",
    left: "1.67%",
  },
  jawaTimurIndonesia14: {
    top: "76.46%",
    left: "1.67%",
    height: "4.29%",
    position: "absolute",
  },
  jawaTimurIndonesia15: {
    top: "82.83%",
    left: "1.67%",
    height: "4.29%",
    position: "absolute",
  },
  text5: {
    top: "89.34%",
    bottom: "6.37%",
    left: "1.67%",
  },
  jawaTimurIndonesia17: {
    top: "95.71%",
    left: "1.67%",
    height: "4.29%",
    position: "absolute",
  },
  component7: {
    alignSelf: "stretch",
    height: 769,
  },
  component8Parent: {
    top: 137,
    left: 56,
    width: 300,
    height: 700,
    gap: 32,
    position: "absolute",
  },
  xemLiTLchS: {
    backgroundColor: Color.colorCornsilk,
    flex: 1,
    height: 917,
  },
});

export default XemLiTLchS;
