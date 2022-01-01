import React, {ReactElement, ReactNode} from 'react';
import {TextStyle, StyleSheet, TextProps} from 'react-native';
import {StyledText} from 'components/styled-text';

type IProps = {
  children: ReactNode;
  style?: TextStyle;
} & TextProps;

export const Description = ({children, style}: IProps): ReactElement => (
  <StyledText style={[styles.title, style]}>{children}</StyledText>
);

interface Style {
  title: TextStyle;
}

const styles = StyleSheet.create<Style>({
  title: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
