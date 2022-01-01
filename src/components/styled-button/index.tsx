import React, { ReactElement, ReactNode } from 'react';
import {
    TouchableOpacity,
    Text,
    TouchableOpacityProps,
    TextStyle,
    Image,
    StyleSheet,
    ViewStyle,
    ImageProps,
    ImageStyle,
    ImageRequireSource,
    Dimensions,
} from 'react-native';
import { COLORS } from 'styles/colors';

type IProps = {
    children?: ReactNode;
    disabled?: boolean;
    icon?: boolean;
    source?: ImageRequireSource;
    styleIcon?: ImageStyle;
    styleButton?: ViewStyle | (false | ViewStyle)[];
    styleText?: TextStyle;
    isBlocked?: boolean;
} & TouchableOpacityProps;

const ButtonIcon = (props: IProps & ImageProps): ReactElement => {
    const { source, styleIcon } = props;
    return <Image source={source} style={[styles.icon, styleIcon]} />;
};

export const StyledButton = ({
    onPress,
    children,
    disabled,
    source = 0,
    styleIcon,
    styleButton,
    styleText,
    icon = false,
    isBlocked = false,
}: IProps): ReactElement => (
    <TouchableOpacity
        onPress={!isBlocked ? onPress : (): void => {}}
        style={[styles.button, styleButton, (disabled || isBlocked) && styles.buttonDisabled]}>
        {icon ? <ButtonIcon source={source} styleIcon={styleIcon} /> : null}
        <Text style={[styles.text, styleText]}>{children}</Text>
    </TouchableOpacity>
);

interface Style {
    button: ViewStyle;
    text: TextStyle;
    icon: ImageStyle;
    buttonDisabled: ViewStyle;
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
    button: {
        borderRadius: 16,
        backgroundColor: COLORS.PRIMARY,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: width * 0.33,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    text: {
        color: COLORS.WHITE,
    },
    icon: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    buttonDisabled: {
        backgroundColor: '#gray',
    },
});
