import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import PhotoPreviewSection from '../components/PhotoPreviewSection';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CamNavigationProp } from '../components/navigationTypes';


// Define the navigation params type for each route
type RootStackParamList = {
  Cam: undefined;
  TmKimThngTin1: { binomial_predictions: string; additionalInfo: { Family?: string; Genus?: string; Country?: string; Poisonous?: boolean } };
};

// Type for navigation prop in Cam component
type CamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cam'>;

// Type for route prop in TmKimThngTin1
type TmKimThngTin1RouteProp = RouteProp<RootStackParamList, 'TmKimThngTin1'>;



export default function Cam() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);
  const navigation = useNavigation<CamNavigationProp>();



  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} icon="camera-alt" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takenPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takenPhoto);
    }
  };

  const handleRetakePhoto = () => setPhoto(null);

  const handleSavePhoto = async () => {
    if (photo) {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'This app needs access to your media library to save photos.');
        return;
      }

      try {
        await MediaLibrary.createAssetAsync(photo.uri);
        Alert.alert('Photo saved!', 'Your photo has been saved to the gallery.');
        setPhoto(null);
      } catch (error) {
        console.error('Error saving photo:', error);
        Alert.alert('Error', 'There was a problem saving your photo.');
      }
    }
  };

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
      setPhoto({ uri: result.assets[0].uri });
    }
  };

  const uploadImage = async () => {
    if (!photo) {
      Alert.alert("No photo to upload", "Please take or select a photo first.");
      return;
    }
  
    try {
      // Create FormData and append the file
      const formData = new FormData();
      formData.append("file", {
        uri: photo.uri,
        name: `snake_${Date.now()}.jpg`,  // Tên tệp
        type: "image/jpeg",  // Loại tệp
      });

      console.log("Uploading image to:", "http://172.27.44.51:5000/upload");
      const uploadResponse = await fetch("http://172.27.44.51:5000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": 'application/json',
        },
        body: formData,
      });
  
      if (!uploadResponse.ok) {
        throw new Error("Upload failed");
      }
  
      const result = await uploadResponse.json();
      if (result.binomial_predictions && result.additional_info) {
        const binomial_predictions = result.binomial_predictions.Binomial;
        const additionalInfo = result.additional_info; // Đối tượng chứa thông tin bổ sung
        
        // Thực hiện các thao tác khác, ví dụ:
        console.log(binomial_predictions); // In ra "Crotalus atrox"
        console.log(additionalInfo);};
  
      // Xử lý kết quả thành công
      if (uploadResponse.status === 200) {
        const imageUrl = `http://172.27.44.51:5000/${result.image_url}`; 
        navigation.navigate("TmKimThngTin1", {
          binomial_predictions: result.binomial_predictions.Binomial, // Đảm bảo đây là key đúng
          additionalInfo: result.additional_info,
          imageUrl: imageUrl
        });
      } else {
        Alert.alert("Upload Error", result.error || "Something went wrong.");
      }
  
    } catch (error) {
      console.error("Error uploading image:", error);
      Alert.alert("Error", "Could not connect to the server.");
    }
  };
  
  

  if (photo) {
    return (
      <PhotoPreviewSection
        photo={photo}
        handleRetakePhoto={handleRetakePhoto}
        handleSavePhoto={handleSavePhoto}
        uploadImage={uploadImage} // New upload button
      />
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button
            icon="autorenew"
            onPress={toggleCameraFacing}
            size={60}
            color="#fff"
            style={styles.button}
          />
          <Button
            icon="camera-alt"
            onPress={handleTakePhoto}
            size={60}
            color="#fff"
            style={styles.button}
          />
          <Button
            icon="photo"
            onPress={handlePickImage}
            size={60}
            color="#fff"
            style={styles.button}
          />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    marginHorizontal: 20,
    height: 60,
    width: 60,
    top: 700,
  },
});
