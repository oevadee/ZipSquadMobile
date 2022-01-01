import React, {ReactElement, ReactNode} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {ScrollViewProps} from 'react-native';

type Props = {
  children: ReactNode;
} & ScrollViewProps;

export const KeyboardAware = ({children, ...props}: Props): ReactElement => (
  <KeyboardAwareScrollView bounces={false} {...props}>
    {children}
  </KeyboardAwareScrollView>
);
