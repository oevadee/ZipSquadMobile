import React, {ReactElement, ReactNode} from 'react';
import {TextStyle, StyleSheet, TextProps} from 'react-native';
import {StyledText} from '../styled-text';

type IProps = {
  children: ReactNode;
  style?: TextStyle;
} & TextProps;

export const Description = (props: IProps): ReactElement => {
  const {children, style} = props;
  return <StyledText style={[styles.title, style]}>{children}</StyledText>;
};

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
