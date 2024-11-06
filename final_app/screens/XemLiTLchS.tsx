import * as React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useEffect, useState  } from "react";
import { useRoute } from '@react-navigation/native';


const XemLiTLchS = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute(); // Nhận route
  const [history, setHistory] = useState([]);
  const { selectedEntry } = route.params; // Lấy selectedEntry từ params

  //const imageUrl = "http://192.168.0.102:5000/${entry.uploaded_image}";

  
  // Hàm lấy dữ liệu lịch sử từ API
  const fetchHistory = async () => {
    try {
      const response = await fetch("http://172.27.44.51:5000/get_history");
      console.log("Response:", response);

      // Kiểm tra xem phản hồi có phải là JSON không trước khi phân tích cú pháp
      const contentType = response.headers.get("content-type");
      if (response.ok && contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setHistory(data);
      } else {
        // Nếu không phải JSON, hiển thị lỗi và in ra nội dung phản hồi để kiểm tra
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
  const handlePress = (entry) => {
    selectedEntry(entry); // Cập nhật trạng thái với mục đã chọn
};

  
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
          <Text style={[styles.sCu, styles.sCuTypo]} onPress={() => navigation.navigate("LchSTmKim")}>Lịch sử</Text>
          <Image
            style={[styles.knowledgeSharingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/time-machine.png")}
          />
        </LinearGradient>
      </View>
      <ScrollView style={styles.component8Parent}>
      {selectedEntry && ( // Ensure selectedEntry is not null
        <View style={styles.component8}>
          <Text style={[styles.tnRn, styles.tnRnFlexBox]}>{selectedEntry.label}</Text>
          <Image
            style={[styles.image5Icon, styles.xemLiTLchSLayout]}
            contentFit="cover"
            source={{ uri: `http://172.27.44.51:5000/${selectedEntry.image_url}` }}
          />
          <View style={styles.additionalInfoContainer}>
          <Text style={styles.infoText}>{`Quốc gia: ${selectedEntry.additional_info.Country}`}</Text>
          <Text style={styles.infoText}>{`Họ: ${selectedEntry.additional_info.Family}`}</Text>
          <Text style={styles.infoText}>{`Chi: ${selectedEntry.additional_info.Genus}`}</Text>
          <Text style={styles.infoText}>{`Độ độc: ${selectedEntry.additional_info.Poisonous}`}</Text>
          <Text style={styles.infoText}>{new Date(selectedEntry.timestamp).toLocaleString()}</Text>
        </View>
        </View>
      )}
    </ScrollView>
        </View>
      
    
  );
};

const styles = StyleSheet.create({
  xemLiTLchSLayout: {
    overflow: "hidden",
    width: "100%",
  },
  additionalInfoContainer: {
    margin: 10,
    marginTop: 300,
    padding: 20,
    borderRadius: 2,
    left: -5,
    width: '72%',
    zIndex: 15,
    backgroundColor: '#e3faaf',
  },
  infoText: {
    fontSize: 17,
    fontFamily: FontFamily.interRegular,
    color: Color.subtleDark,
    marginBottom: 10,
    zIndex: 110,
    position: "relative", // Use relative positioning instead of absolute
    
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
    left: 10,
  },
  
  tnRnFlexBox: {
    textAlign: "center",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    top: 200,
    marginTop: 20,
    //fontWeight: "bold",
    color: "#31511E",
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
  tnRn: {
    height: 917,
    width: 300,
    top: "89.02%",
    left: "33.46%",
    fontSize: 12,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  image5Icon: {
    height: 200,
    right: "0%",
    bottom: "23.11%",
    maxWidth: 300,
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  component8: {
    width: 400,
    height: 700,
  },
  
  component7: {
    alignSelf: "stretch",
    height: 769,
  },
  component8Parent: {
    flex: 1, // Allow the ScrollView to take all available space
    top: 137,
    left: 56,
    maxWidth: "100%",
    width: '100%',
    height: '100%',
    gap: 32,
  },
  xemLiTLchS: {
    backgroundColor: Color.colorCornsilk,
    flex: 1,
    height: 917,
  },
});

export default XemLiTLchS;
