import * as React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState } from "react";


const LchSTmKim = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [history, setHistory] = useState([]);
  //const imageUrl = "http://192.168.0.102:5000/${entry.uploaded_image}";

  
  // Hàm lấy dữ liệu lịch sử từ API
  const fetchHistory = async () => {
    try {
      const response = await fetch("http://172.27.44.51:5000/get_history");
      console.log("Response:", response);
  
      const contentType = response.headers.get("content-type");
      if (response.ok && contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setHistory(data.reverse()); // Reverse the data order to show latest first
      } else {
        console.error("Phản hồi không phải JSON:", await response.text());
      }
    } catch (error) {
      console.error("Lỗi khi lấy lịch sử:", error);
    }
  };


  

  // Gọi fetchHistory khi component được tải lần đầu
  useEffect(() => {
    fetchHistory();
  }, []);

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
          colors={["#416D19", "#416D19"]}
        >
          <Text style={[styles.sCu, styles.sCuTypo]} onPress={() => navigation.navigate("NhnBitSCu")}>{`Sơ cứu `}</Text>
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
          <Text style={[styles.tmKim, styles.sCuTypo]} onPress={() => navigation.navigate("Cam")}>Tìm kiếm</Text>
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
          <Text style={[styles.sCu, styles.sCuTypo]}>Lịch sử</Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/time-machine.png")}
          />
        </LinearGradient>
      </View>
      <ScrollView style={styles.component2Parent}>
        {history.map((entry, index) => (
          <Pressable
            key={index}
            style={styles.component2}
            onPress={() => navigation.navigate("XemLiTLchS", { selectedEntry: entry })}
          >
            <View style={styles.component2Inner}>
              <LinearGradient
                style={styles.instanceChildShadowBox}
                locations={[0, 0.99]}
                colors={["#e5ffd3", "#e5ffd3"]}
              />
            </View>
            <Text style={styles.tnRn}>{entry.label}</Text>
            
             {/* Hiển thị tên rắn */}
            <Image
              style={styles.image4Icon}
              contentFit="cover"
              source={{ uri: `http://172.27.44.51:5000/${entry.image_url}` }} // Updated to use entry.image_url
              
              />
          </Pressable>
        ))}
      </ScrollView>
    </View>
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
    left: 10,
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
    bottom: 0,
    left: -3,
    backgroundColor: '#FEFAE0',
    width: 415,
    height: 60,
    gap: Gap.gap_md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
  },
  instanceChildShadowBox: {
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#416D19',
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
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
    height: 100,
    width: 150,
    top: "42.71%",
    left: 225,
    right: 25,
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
    color: "#31511E",
    textAlign: "left",
    position: "absolute",
  },
  image4Icon: {
    height: "85%",
    width: "50%",
    top: "10%",
    right: "44.36%",
    bottom: "15%",
    left: "5.46%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component2: {
    alignSelf: "stretch",
    height: 170,
    margin: 5,
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
    backgroundColor: '#FEFAE0',
    flex: 1,
    height: 917,
    overflow: "hidden",
    width: "100%",
  },
});

export default LchSTmKim;
