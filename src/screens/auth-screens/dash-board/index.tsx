import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const DashboardScreen = () => {
    return (
        <View style={styles.constainer}>
            <Text>DashboardScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    },
});
