// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { Provider as PaperProvider } from "react-native-paper";

// import AppNavigator from "./AppNavigator";

// const App = () => {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </PaperProvider>
//   );
// };

// export default App;
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./config/fonts";

import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}