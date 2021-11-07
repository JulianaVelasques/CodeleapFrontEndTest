import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
// import { Provider } from 'react-redux';

import { Routes } from './src/routes';
import { store } from './src/redux/store';
import { Provider, useSelector } from 'react-redux';

import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { theme } from './src/global/styles/theme';

export default function App() {
  const [fonstLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
