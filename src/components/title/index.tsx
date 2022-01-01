import React, { ReactElement, ReactNode } from 'react';
import { TextStyle, StyleSheet, TextProps } from 'react-native';
import { StyledText } from 'components/styled-text';

type IProps = {
    children: ReactNode;
    style?: TextStyle;
} & TextProps;

export const Title = ({ children, style }: IProps): ReactElement => (
    <StyledText style={[styles.title, style]}>{children}</StyledText>
);

interface Style {
    title: TextStyle;
}

const styles = StyleSheet.create<Style>({
    title: {
        fontSize: 22,
        lineHeight: 24,
        color: '#7a7a7a',
        textAlign: 'center',
    },
});
