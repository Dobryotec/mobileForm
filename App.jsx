import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Form from "./components/Form";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background.webp")}
        resizeMode="cover"
        style={styles.rootScreen}
      >
        <Form />
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
