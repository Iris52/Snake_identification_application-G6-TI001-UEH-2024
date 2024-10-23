import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const LchSTmKim = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.lchSTmKim}>
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
      <View style={styles.component2Parent}>
        <Pressable
          style={styles.component2}
          onPress={() => navigation.navigate("XemLiTLchS")}
        >
          <View style={styles.component2Inner}>
            <LinearGradient
              style={styles.instanceChildShadowBox}
              locations={[0, 0.99]}
              colors={["#b9ecbc", "#fefae0"]}
            />
          </View>
          <Text style={styles.tnRn}>Tên rắn</Text>
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
        <Pressable
          style={styles.component2}
          onPress={() => navigation.navigate("XemLiTLchS")}
        >
          <View style={styles.component2Inner}>
            <LinearGradient
              style={styles.instanceChildShadowBox}
              locations={[0, 0.99]}
              colors={["#b9ecbc", "#fefae0"]}
            />
          </View>
          <Text style={styles.tnRn}>Tên rắn</Text>
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
        <Pressable
          style={styles.component2}
          onPress={() => navigation.navigate("XemLiTLchS")}
        >
          <View style={styles.component2Inner}>
            <LinearGradient
              style={styles.instanceChildShadowBox}
              locations={[0, 0.99]}
              colors={["#b9ecbc", "#fefae0"]}
            />
          </View>
          <Text style={styles.tnRn}>Tên rắn</Text>
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
        <Pressable
          style={styles.component2}
          onPress={() => navigation.navigate("XemLiTLchS")}
        >
          <View style={styles.component2Inner}>
            <LinearGradient
              style={styles.instanceChildShadowBox}
              locations={[0, 0.99]}
              colors={["#b9ecbc", "#fefae0"]}
            />
          </View>
          <Text style={styles.tnRn}>Tên rắn</Text>
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
        <Pressable
          style={styles.component2}
          onPress={() => navigation.navigate("XemLiTLchS")}
        >
          <View style={styles.component2Inner}>
            <LinearGradient
              style={styles.instanceChildShadowBox}
              locations={[0, 0.99]}
              colors={["#b9ecbc", "#fefae0"]}
            />
          </View>
          <Text style={styles.tnRn}>Tên rắn</Text>
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  removeBgai17246349132062Icon: {
    top: 26,
    left: -15,
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
    flexDirection: "row",
    gap: Gap.gap_md,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  instanceChildShadowBox: {
    borderWidth: 2,
    borderColor: Color.colorForestgreen,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
  },
  component2Inner: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  tnRn: {
    height: "14.57%",
    width: "24.36%",
    top: "42.71%",
    left: "66.15%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  image4Icon: {
    height: "64.82%",
    width: "47.18%",
    top: "17.59%",
    right: "44.36%",
    bottom: "17.59%",
    left: "8.46%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component2: {
    alignSelf: "stretch",
    height: 199,
  },
  component2Parent: {
    top: 129,
    left: 8,
    width: 390,
    height: 697,
    gap: 50,
    position: "absolute",
  },
  lchSTmKim: {
    backgroundColor: Color.colorCornsilk,
    flex: 1,
    height: 917,
    overflow: "hidden",
    width: "100%",
  },
});

export default LchSTmKim;
