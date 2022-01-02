import React, { ReactElement } from 'react';
import { StyledButton } from 'components/styled-button';
import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

interface IProps {
    handleBack: () => void;
}

export const BackButton = ({ handleBack }: IProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <StyledButton
            icon
            source={require('assets/arrow-left.png')}
            styleIcon={styles.icon}
            styleButton={styles.button}
            onPress={handleBack}
        >
            {t('common.back')}
        </StyledButton>
    );
};

interface Style {
    icon: ImageStyle;
    button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    icon: {
        width: 15,
        height: 15,
    },
    button: {
        backgroundColor: 'transparent',
        width: 'auto',
        minWidth: 0,
    },
});
