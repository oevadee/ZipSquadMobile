import React, {ReactElement, ReactNode} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  View,
  ImageStyle,
} from 'react-native';
import {COLORS} from 'styles/colors';
import {KeyboardAware} from 'modules/keyboard-aware';

interface IProps {
  children: ReactNode;
  automaticallyAdjustContentInsets?: boolean;
  logoStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}

export const SafeAreaNoAuth = (props: IProps): ReactElement => {
  const {
    children,
    automaticallyAdjustContentInsets = true,
    logoStyle,
    containerStyle,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAware
        contentContainerStyle={[styles.wrapper, containerStyle]}
        automaticallyAdjustContentInsets={automaticallyAdjustContentInsets}>
        <View style={[styles.logoWrapper, logoStyle]}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.logo}
          />
        </View>
        {children}
      </KeyboardAware>
    </SafeAreaView>
  );
};

interface Style {
  container: ViewStyle;
  wrapper: ViewStyle;
  logoWrapper: ViewStyle;
  logo: ImageStyle;
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    paddingVertical: Platform.OS !== 'ios' ? height * 0.05 : 'auto',
  },
  wrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.1,
    paddingVertical: Platform.OS === 'ios' ? height * 0.05 : 'auto',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 45,
    justifyContent: 'flex-start',
  },
});
