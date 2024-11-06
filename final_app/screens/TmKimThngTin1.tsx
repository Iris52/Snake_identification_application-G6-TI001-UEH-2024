import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ScrollView,Pressable, View, Text,Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker

// Define the type for navigation parameters
type Params = {
  binomial_predictions: string;
  additionalInfo: {
    Family?: string;
    Genus?: string;
    Country?: string;
    Poisonous?: boolean | string;
  };
  imageUrl: string;
};

const TmKimThngTin1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<Record<string, Params>, "TmKimThngTin1">>();
  const { binomial_predictions, additionalInfo, imageUrl } = route.params || {};

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'This app needs access to your media library to select photos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      navigation.navigate("Cam"); // Điều hướng đến màn hình Camera
    }
  };

  const isPoisonous = additionalInfo?.Poisonous === true || additionalInfo?.Poisonous === "true" || additionalInfo?.Poisonous === "Poisonous";

  return (
    <View style={[styles.tmKimThngTin, styles.image1IconLayout]}>
      <Image
        style={styles.removeBgai17246349132062Icon}
        contentFit="cover"
        source={require("../assets/removebgai-1724634913206-2.png")}
      />
      <Pressable
        style={styles.findAndReplace}
        onPress={() => navigation.navigate("Cam")}
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
      <Pressable onPress={handlePickImage}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
        
      />
      </Pressable>
      <View style={styles.tmKimThngTinInner}>
        <LinearGradient
          style={styles.componentChild}
          locations={[0, 0.99]}
          colors={["#e5ffd3", "#e5ffd3"]}
        />
      </View>
      <View style={styles.image1Parent}>
        <Image
          style={[styles.image1Icon, styles.image1IconLayout]}
          contentFit="cover"
          source={{ uri: imageUrl }}
        />

{/* The name remains fixed */}
<Text style={styles.tnRn}>{binomial_predictions || 'Unknown'}</Text> 
<View style={styles.component1}>
<ScrollView style={styles.scrollView}>

      {/* ScrollView wraps only the information you want to scroll */}
        <View style={styles.additionalInfoContainer}>
          
          <Text style={styles.infoText}>Họ: {additionalInfo?.Family || 'N/A'}</Text>
          <Text style={styles.infoText}>Chi: {additionalInfo?.Genus || 'N/A'}</Text>
          <Text style={styles.infoText}>Quốc gia: {additionalInfo?.Country || 'N/A'}</Text>
          <Text style={styles.infoText}>
                Độ độc: {isPoisonous ? "Có độc" : "Không có độc"}
              </Text>
              {isPoisonous ? (
                




                <Text style={styles.infoText1}>
                 {`Nếu bị rắn độc cắn, hành động nhanh chóng và chính xác là rất quan trọng:
- Gọi cấp cứu hoặc đưa người bị cắn đến bệnh viện.
- Giữ bình tĩnh và hạn chế di chuyển.
- Giữ vị trí cắn ở vị trí thấp hơn tim.
- Cởi bỏ các trang sức (như nhẫn, đồng hồ) để tránh chèn ép.`}
              </Text>
            ) : (
              <Text style={styles.infoText1}>
                {`Nếu bị rắn không độc cắn, các bước sơ cứu như sau:
- Giữ bình tĩnh: Cố gắng không hoảng sợ để giữ nhịp tim ổn định.
- Rửa vết thương: Rửa sạch vết cắn bằng xà phòng và nước để loại bỏ bất kỳ bụi bẩn nào.
- Ngừng hoạt động: Ngồi hoặc nằm xuống để hạn chế vận động, giúp giảm nguy cơ sưng tấy.
- Băng vết thương: Sử dụng băng sạch để băng vết thương.
- Theo dõi tình trạng: Theo dõi xem có dấu hiệu nhiễm trùng hay không (đỏ, sưng, đau) và đi khám bác sĩ nếu cần.`}
              </Text>

          



          )}
        </View>
      </ScrollView>
    </View>
         
      </View>

      <View style={styles.button1Parent}>
        <LinearGradient
          style={styles.button1}
          locations={[0, 1]}
          colors={["#416D19", "#416D19"]}
        >
          <Text style={[styles.sCu, styles.sCuTypo]} onPress={() => navigation.navigate("NhnBitSCu")}>Sơ cứu</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  scrollView: {
    flex: 1, // Allow the ScrollView to take all available space
    maxWidth: "100%",
    width: '95%',
    gap: 22,
  },
  rnKhngC: {
    fontFamily: "RobotoFlex-Regular",
    fontWeight: "500",
    zIndex: 1,
},
  rnC: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoFlexRegular,
    zIndex: 1,
  },
  nuBRn: {
    fontFamily: FontFamily.robotoFlexRegular,
    zIndex: 1,
  },
  additionalInfoContainer: {
    marginTop: -15,
    padding: 30,
    left: 26,
    zIndex: -2,
  },
  infoText: {
    fontSize: 15,
    //fontWeight: 'bold', 
    fontFamily: FontFamily.interRegular,
    color: Color.subtleDark,
    marginBottom: 5,
    lineHeight: 25,
  },
  infoText1: {
    fontSize: 15,
    //fontWeight: 'bold', 
    fontFamily: FontFamily.interRegular,
    color: Color.subtleDark,
    marginBottom: 5,
    lineHeight: 25,
  },
  textLayout: {
    flexDirection: "row",
    width: "89.08%",
    height: "9.89%",
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
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: '#416D19',
    borderWidth: 2.5,
    backgroundColor: '#FEFAE0',
    top: -90,
    left: 20,
    height: 520,
    position: "absolute",
    width: "90%",
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
    marginTop: 10,
  },
  tnRn: {
    height: 100,
    width: 500,
    fontSize: 25,
    //fontWeight: 'bold',
    fontFamily: FontFamily.interRegular,
    color: '#31511E',
    textAlign: "center",
    top: "62%",
    left: -90,
    position: "absolute",
    justifyContent: "center", // Căn giữa dọc
    alignItems: "center", // Căn giữa ngang
    
  },
  text: {
    top: "16.85%",
    right: "10.21%",
    bottom: "73.26%",
    left: "0.7%",
  },
  text1: {
    top: "60.81%",
    right: "10.92%",
    bottom: "29.3%",
    left: "0%",
  },

  component1: {
    width: 420,
    height: 250,
    marginTop: 33,
  },
  image1Parent: {
    height: "40%",
    width: "69.76%",
    top: "33%",
    right: "19.01%",
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
    backgroundColor: '#FEFAE0',
    height: 70,
    gap: Gap.gap_md,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 420,
    position: "absolute",
  },
  tmKimThngTin: {
    backgroundColor: '#FEFAE0',
    flex: 1,
    height: 917,
  },
});

export default TmKimThngTin1;
