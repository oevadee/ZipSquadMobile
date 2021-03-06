import React, { ReactElement, ReactNode } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { COLORS } from 'styles/colors';

interface IProps extends TextProps {
    children: ReactNode;
}

export const StyledText = ({ children, style, ...props }: IProps): ReactElement => (
    <Text {...props} style={[styles.text, style]}>
        {children}
    </Text>
);

interface Style {
    text: TextStyle;
}

const styles = StyleSheet.create<Style>({
    text: {
        fontSize: 14,
        color: COLORS.WHITE,
    },
});
