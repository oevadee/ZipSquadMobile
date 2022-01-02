import React, { ReactElement, ReactNode } from 'react';
import { StyledText } from 'components/styled-text';
import { StyleSheet, TextStyle, TextProps } from 'react-native';
import { COLORS } from 'styles/colors';

type Props = {
    isError: boolean;
    style?: TextStyle;
    children?: ReactNode;
} & TextProps;

export const Error = ({ isError, style, children, ...props }: Props): ReactElement =>
    !isError ? (
        <></>
    ) : (
        <StyledText {...props} style={[styles.text, style]}>
            {children}
        </StyledText>
    );

interface Style {
    text: TextStyle;
}

const styles = StyleSheet.create<Style>({
    text: {
        color: COLORS.ORANGE,
        width: '100%',
        textAlign: 'right',
        marginBottom: 20,
    },
});
