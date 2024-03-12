import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBarStyle } from 'react-native';
import AppNavigator from './AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#220135" style="light" />
        <SafeAreaView style={Styles.droidSafeArea}>
      <AppNavigator />
    </SafeAreaView>
    </>
  );
}





const Styles = StyleSheet.create({
  droidSafeArea: {
      flex: 1,
  },
});