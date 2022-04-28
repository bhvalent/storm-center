import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
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