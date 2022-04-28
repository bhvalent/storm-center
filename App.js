import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import TabNavigator from './navigation/TabNavigator';
import { getDarkTheme } from './constants/theme';

export default function App() {
  const theme = getDarkTheme();
  return (
    <NavigationContainer theme={theme}>
      <SafeAreaView style={styles.screen}>
        <TabNavigator />
        <StatusBar style='auto' />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});