import React, { ReactElement, useState } from 'react';
import {
    StyleSheet,
    TextInput,
    ViewStyle,
    View,
    TouchableOpacity,
    Image,
    TextInputProps,
    TouchableOpacityProps,
    ImageStyle,
} from 'react-native';
import { COLORS } from 'styles/colors';
import { FieldError } from 'react-hook-form';

type IProps = {
    error?: FieldError;
} & TextInputProps;

type IShowPassword = {
    onPress: () => void;
    isFocus: boolean;
    isVisible: boolean;
    error?: FieldError;
} & TouchableOpacityProps;

const ShowPassword = ({ onPress, isFocus, error, isVisible }: IShowPassword): ReactElement => (
    <TouchableOpacity
        style={[styles.password, error && styles.focused, isFocus && styles.focused]}
        onPress={onPress}
    >
        {isVisible ? (
            <Image source={require('assets/eye-closed.png')} style={styles.icon} />
        ) : (
            <Image source={require('assets/eye-open.png')} style={styles.icon} />
        )}
    </TouchableOpacity>
);

export const PasswordInput = ({ error, ...props }: IProps): ReactElement => {
    const [isFocus, setFocus] = useState<boolean>(false);
    const [secureText, setSecureText] = useState<boolean>(true);
    const handleShowPassword = (): void => {
        setSecureText(!secureText);
    };
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={[styles.input, error && styles.focused, isFocus && styles.focused]}
                onFocus={(): void => setFocus(true)}
                onBlur={(): void => setFocus(false)}
                secureTextEntry={secureText}
            />
            <ShowPassword
                onPress={handleShowPassword}
                isFocus={isFocus}
                error={error}
                isVisible={!secureText}
            />
        </View>
    );
};

interface Style {
    input: ViewStyle;
    container: ViewStyle;
    password: ViewStyle;
    focused: ViewStyle;
    icon: ImageStyle;
}

const BORDER_WIDTH = 3;
const BORDER_RADIUS = 2;

const styles = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
    },
    input: {
        borderTopWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
        borderBottomWidth: BORDER_WIDTH,
        borderColor: COLORS.GRAY,
        backgroundColor: COLORS.GRAY,
        borderBottomLeftRadius: BORDER_RADIUS,
        padding: 10,
        width: '85%',
        color: COLORS.WHITE,
        fontSize: 14,
        height: 48,
    },
    password: {
        width: '15%',
        backgroundColor: COLORS.GRAY,
        borderBottomRightRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: BORDER_WIDTH,
        borderBottomWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderColor: COLORS.GRAY,
    },
    focused: {
        borderColor: COLORS.PRIMARY,
    },
    icon: {
        tintColor: COLORS.WHITE,
        width: 25,
        height: 25,
    },
});
