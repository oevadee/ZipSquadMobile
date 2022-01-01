import React, { ReactElement } from 'react';
import CheckBox from 'react-native-check-box';
import { COLORS } from 'styles/colors';

interface IProps {
    checked: boolean;
    onChange: () => void;
}

export const Checkbox = ({ checked, onChange }: IProps): ReactElement => (
    <CheckBox
        onClick={onChange}
        isChecked={checked}
        uncheckedCheckBoxColor={COLORS.GRAY}
        checkedCheckBoxColor={COLORS.GRAY}
        checkBoxColor={COLORS.GRAY}
    />
);
