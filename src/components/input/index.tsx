import React, { ReactElement, useState } from 'react';
import {
    KeyboardTypeOptions,
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';
import { COLORS } from 'styles/colors';
import { FieldError } from 'react-hook-form';

interface RefObject<T> {
    readonly current: T | null;
}

type IProps = {
    focusOff?: boolean;
    styleInput?: StyleProp<ViewStyle>;
    error?: FieldError | boolean;
    containerStyle?: ViewStyle;
    inputFocused?: ViewStyle;
    onInputFocus?: () => void;
    onInputBlur?: () => void;
    inputRef?: RefObject<any> | any;
    type?: 'email';
} & TextInputProps;

export const Input = ({
    styleInput,
    error,
    focusOff,
    inputRef,
    containerStyle,
    onInputFocus = (): void => {},
    onInputBlur = (): void => {},
    editable = true,
    type,
    ...props
}: IProps): ReactElement => {
    const [isFocus, setFocus] = useState<boolean>(false);

    const onFocusInput = (): void => {
        setFocus(true);
        onInputFocus();
    };

    const onBlurInput = (): void => {
        setFocus(true);
        onInputBlur();
    };

    const emailType =
        type === 'email'
            ? {
                  autoCapitalize: 'none' as 'none' | 'sentences' | 'words' | 'characters',
                  keyboardType: 'email-address' as KeyboardTypeOptions,
                  autoCorrect: false,
              }
            : undefined;

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                {...props}
                style={[
                    styles.input,
                    !editable && styles.readOnly,
                    styleInput,
                    error && styles.inputFocused,
                    isFocus && focusOff && styles.inputFocused,
                ]}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                ref={inputRef}
                {...emailType}
            />
        </View>
    );
};

interface Style {
    input: ViewStyle;
    inputFocused: ViewStyle;
    container: ViewStyle;
    readOnly: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        position: 'relative',
    },
    input: {
        width: '100%',
        borderWidth: 3,
        borderColor: COLORS.GRAY,
        backgroundColor: COLORS.GRAY,
        borderRadius: 2,
        padding: 10,
        color: COLORS.WHITE,
        fontSize: 14,
        height: 48,
    },
    inputFocused: {
        borderColor: COLORS.PRIMARY,
    },
    readOnly: {
        color: COLORS.GRAY,
    },
});
