import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Gap } from "../GlobalStyles";

const NhnBitSCu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.nhnBitSCu1}
      onPress={() => navigation.navigate("NhnBitSCu1")}
    >
      <View style={styles.button1Parent}>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#416D19", "#416D19"]}
        >
          <Text style={[styles.sCu, styles.lchSTypo]}>Sơ cứu</Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/knowledge-sharing.png")}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#416D19", "#416D19"]}
        >
          <Text style={[styles.tmKim, styles.lchSTypo]} onPress={() => navigation.navigate("Cam")}>
            Tìm kiếm
          </Text>
            <Image
            style={[styles.searchIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#416D19", "#416D19"]}
        >
          <Text style={[styles.lchS, styles.lchSTypo]} onPress={() => navigation.navigate("LchSTmKim")}>
            Lịch sử
          </Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/time-machine.png")}
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
        <Text style={[styles.rnKhngCContainer, styles.sCuLayout1]}>
          <Text style={styles.rnKhngCContainer1}>
            <Text style={styles.rnKhngC}>{`Rắn không độc
`}</Text>
            <Text
              style={styles.nuBRn}
            >{`Nếu bị rắn không độc cắn, các bước sơ cứu như sau:
- Giữ bình tĩnh: Cố gắng không hoảng sợ để giữ nhịp tim ổn định.
- Rửa vết thương: Rửa sạch vết cắn bằng xà phòng và nước để loại bỏ bất kỳ bụi bẩn nào.
- Ngừng hoạt động: Ngồi hoặc nằm xuống để hạn chế vận động, giúp giảm nguy cơ sưng tấy.
- Băng vết thương: Sử dụng băng sạch để băng vết thương.
- Theo dõi tình trạng: Theo dõi xem có dấu hiệu nhiễm trùng hay không (đỏ, sưng, đau) và đi khám bác sĩ nếu cần.`}</Text>
          </Text>
        </Text>
      </View>
      <Text style={styles.sCuKhi}>Sơ cứu khi bị rắn cắn</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sCuLayout: {
      width: 52,
      left: 38
  },
  iconLayout: {
    height: 20,
    width: 20,
    top: 10,
    position: "absolute",
    left: 10,
  },
  lchSTypo: {
    width: 65,
    position: "absolute",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    top: 8,
    left: 29,
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
  sCuLayout1: {
      display: "flex",
      lineHeight: 20,
      letterSpacing: 0,
      alignItems: "center"
  },
  sCu: {
      top: 9,
      fontFamily: "Roboto-Medium",
      display: "flex",
      lineHeight: 20,
      letterSpacing: 0,
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      fontSize: 12,
      width: 52,
      fontWeight: "700",
      justifyContent: "center",
      position: "absolute"
  },
  knowledgeSharingIcon: {
      left: 10
  },
  button1: {
      borderRadius: 100,
      width: 100,
      backgroundColor: "transparent",
      height: 39
  },
  tmKim: {
      left: 33,
      width: 60
  },
  searchIcon: {
      left: 10
  },
  lchS: {
      width: 45,
      left: 38
  },
  button1Parent: {
      bottom: 0,
      left: 0,
      backgroundColor: "#FEFAE0",
      width: 410,
      height: 63,
      gap: 18,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      position: "absolute"
  },
  removeBgai17246349132062Icon: {
      top: 78,
      left: -30,
      width: 137,
      height: 91,
      position: "absolute"
  },
  nhNhnDin1: {
      top: 169,
      left: 127,
      width: 146,
      height: 206,
      position: "absolute"
  },
  rnKhngC: {
      fontFamily: "RobotoFlex-Regular",
      //fontWeight: "700",
      color: '#31511E', 
      fontSize: 17,
  },
  nuBRn: {
      fontFamily: "RobotoFlex-Regular"
  },
  rnKhngCContainer1: {
      width: "100%"
  },
  rnKhngCContainer: {
      fontSize: 14,
      color: "#61646b",
      height: 323,
      textAlign: "left",
      width: 317,
      display: "flex",
      lineHeight: 20,
      letterSpacing: 0
  },
  text: {
      top: 432,
      height: 301,
      width: 317,
      left: 38,
      flexDirection: "row",
      position: "absolute"
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
  nhnBitSCu1: {
      backgroundColor: "#FEFAE0",
      flex: 1,
      height: 865,
      width: "100%"
  }
});

export default NhnBitSCu;
