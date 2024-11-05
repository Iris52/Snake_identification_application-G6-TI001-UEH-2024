import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Page from "./screens/Page";
import Page2giiThiuApp from "./screens/Page2giiThiuApp";
import NhnBitSCu from "./screens/NhnBitSCu";
import LchSTmKim from "./screens/LchSTmKim";
import XemLiTLchS from "./screens/XemLiTLchS";
import TmKimThngTin from "./screens/TmKimThngTin";
import TmKimThngTin1 from "./screens/TmKimThngTin1";
import NhnBitSCu1 from "./screens/NhnBitSCu1";
import Cam from "./screens/Cam"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Rasa-Regular": require("./assets/fonts/Rasa-Regular.ttf"),
    "Rasa-Bold": require("./assets/fonts/Rasa-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "RobotoFlex-Regular": require("./assets/fonts/RobotoFlex-Regular.ttf"),
    "RedactedScript-Regular": require("./assets/fonts/RedactedScript-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Page" component={Page} />
          <Stack.Screen name="Page2giiThiuApp" component={Page2giiThiuApp} />
          <Stack.Screen name="NhnBitSCu" component={NhnBitSCu} />
          <Stack.Screen name="LchSTmKim" component={LchSTmKim} />
          <Stack.Screen name="XemLiTLchS" component={XemLiTLchS} />
          <Stack.Screen name="TmKimThngTin" component={TmKimThngTin} />
          <Stack.Screen name="TmKimThngTin1" component={TmKimThngTin1} />
          <Stack.Screen name="NhnBitSCu1" component={NhnBitSCu1} />
          <Stack.Screen name="Cam" component={Cam} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
