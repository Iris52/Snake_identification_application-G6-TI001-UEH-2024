import * as React from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const NhnBitSCu1 = () => {
  
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.nhnBitSCu2}>
      <View style={styles.button1Parent}>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#416D19", "#416D19"]}
        >
          <Text style={[styles.sCu, styles.sCuLayout]}>Sơ cứu</Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/knowledge-sharing1.png")}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#416D19", "#416D19"]}
        >
        <Text style={[styles.tmKim, styles.sCuLayout]} onPress={() => navigation.navigate("Cam")}>
            Tìm kiếm
        </Text>
        <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search1.png")}
        />
        </LinearGradient>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#416D19", "#416D19"]}
        >
          <Text style={[styles.sCu, styles.sCuLayout]} onPress={() => navigation.navigate("LchSTmKim")}>
            Lịch sử
          </Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/time-machine1.png")}
          />
        </LinearGradient>
      </View>
      <Image
        style={styles.removeBgai17246349132062Icon}
        contentFit="cover"
        source={require("../assets/removebgai-1724634913206-2.png")}
      />
      <Image
        style={styles.nhNhnDin1}
        contentFit="cover"
        source={require("../assets/nh-nhn-din-1.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.rnCNuContainer, styles.sCuLayout]}>
          <Text style={styles.rnCNuContainer1}>
          <Text style={styles.rnC}>{`Rắn độc
`}</Text>
            <Text
              style={styles.nuBRn}
            >{`Nếu bị rắn độc cắn, hành động nhanh chóng và chính xác là rất quan trọng:
- Gọi cấp cứu hoặc đưa người bị cắn đến bệnh viện.
- Giữ bình tĩnh và hạn chế di chuyển
- Giữ vị trí cắn ở vị trí thấp hơn tim
- Cởi bỏ các trang sức (như nhẫn, đồng hồ) để tránh chèn ép.

`}</Text>
            <Text style={styles.rnC}>{`
Không làm những việc sau:
`}</Text>
            <Text style={styles.nuBRn}>{`- Không chích hoặc hút nọc độc ra
- Không băng chặt vết thương
- Không uống rượu hoặc caffeine
- Không sử dụng kem bôi hoặc thuốc kháng sinh`}</Text>
          </Text>
        </Text>
      </View>
      <Text style={styles.sCuKhi}>Sơ cứu khi bị rắn cắn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nhNhnDin1: {
    top: 169,
    left: 127,
    width: 146,
    height: 206,
    position: "absolute"
},
  sCuLayout: {
    display: "flex",
    lineHeight: 20,
    letterSpacing: 0,
    alignItems: "center",
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 10,
    position: "absolute",
    left: 10,
  },
  sCu: {
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
  knowledgeSharingIcon: {
    left: 10,
  },
  button1: {
    borderRadius: Border.br_81xl,
    width: 110,
    backgroundColor: "transparent",
    height: 39,
  },
  tmKim: {
    fontFamily: "Roboto-Medium",
      fontWeight: "500",
      top: 8,
      left: 33,
      display: "flex",
      textAlign: "center",
      color: "#fff",
      lineHeight: 20,
      letterSpacing: 0,
      fontSize: 13,
      height: 39,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
  },
  searchIcon: {
    left: 10,
  },
  button1Parent: {
  
    bottom: 0,
    left: -3,
    backgroundColor: '#FEFAE0',
    width: 415,
    height: 70,
    gap: Gap.gap_md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
  },
  removeBgai17246349132062Icon: {
    top: 78,
      left: -30,
      width: 137,
      height: 91,
      position: "absolute",
  },
  rnC: {
    fontFamily: "RobotoFlex-Regular",
      //fontWeight: "700",
      color: '#31511E', 
      fontSize: 17,
  },
  nuBRn: {
    fontFamily: FontFamily.robotoFlexRegular,
  },
  rnCNuContainer1: {
    width: "100%",
  },
  rnCNuContainer: {
    fontSize: 15,
    color: Color.subtleDark,
    width: 370,
    height: 410,
    textAlign: "left",
    display: "flex",
    lineHeight: 20,
    letterSpacing: 0,
  },
  text: {
    top: 400,
    left: 28,
    width: 340,
    height: 267,
    flexDirection: "row",
    position: "absolute",
  },
  sCuKhi: {
    marginLeft: -130,
    bottom: 675,
    left: "50%",
    fontSize: 27,
    fontFamily: "Rasa-Regular",
    color: "#000",
    width: 260,
    height: 44,
    textAlign: "center",
    position: "absolute"
  },
  nhnBitSCu2: {
    backgroundColor: '#FEFAE0',
    flex: 1,
    height: 917,
    overflow: "hidden",
    width: "100%",
  },
});

export default NhnBitSCu1;
