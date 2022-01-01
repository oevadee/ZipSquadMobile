import React, { ReactElement, ReactNode } from 'react';
import { View, Text, TextStyle, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from 'styles/colors';

interface IProps {
    children: ReactNode;
}

export const Label = ({ children }: IProps): ReactElement => (
    <View style={styles.label}>
        <Text style={styles.text}>{children}</Text>
    </View>
);

interface Style {
    text: TextStyle;
    label: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    label: {
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
        color: COLORS.WHITE,
        lineHeight: 21,
    },
});
