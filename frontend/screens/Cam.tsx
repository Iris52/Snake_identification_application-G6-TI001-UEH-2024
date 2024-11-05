import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import PhotoPreviewSection from '../components/PhotoPreviewSection';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker
import Button from '../components/Button'; // Import your custom Button component

export default function Cam() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);

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
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'This app needs access to your media library to select photos.');
      return;
    }

    // Open image picker
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

  if (photo) {
    return (
      <PhotoPreviewSection
        photo={photo}
        handleRetakePhoto={handleRetakePhoto}
        handleSavePhoto={handleSavePhoto}
      />
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button
            icon="autorenew" // Icon for toggling camera
            onPress={toggleCameraFacing}
            size={60}
            color="#fff"
            style={styles.button}
          />
          <Button
            icon="camera-alt" // Icon for taking photo
            onPress={handleTakePhoto}
            size={60}
            color="#fff"
            style={styles.button}
          />
          <Button
            icon="photo" // Icon for picking photo from library
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
