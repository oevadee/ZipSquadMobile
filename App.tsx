/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { i18nInit } from 'locales/i18n';
import { Authorization } from 'modules/authorization';
import { COLORS } from 'styles/colors';

i18nInit();

const App = () => (
    <NavigationContainer>
        <SafeAreaView style={styles.container}>
            <Authorization />
        </SafeAreaView>
    </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
});

export default App;
