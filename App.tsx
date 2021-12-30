/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Authorization} from './src/modules/authorization';
import {COLORS} from './src/styles/colors';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Authorization />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: COLORS.BACKGROUND,
  },
});

export default App;
