import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SuperEllipseMask from 'react-native-super-ellipse-mask';

import { isIOS } from '../../../services/envHelper';
import { FontStyle, Color } from '../../../theme';

export const RoundedButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export const RoundedButtonHeight = {
  SMALL: 24,
  MEDIUM: 36,
  LARGE: 48,
};

export const ButtonColors = {
  BLUE: 'BLUE',
  GREY: 'GREY',
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  [RoundedButtonSize.SMALL]: {
    height: RoundedButtonHeight.SMALL,
    borderRadius: 8,
    borderWidth: 1.5,
    paddingLeft: 12,
    paddingRight: 12,
  },
  [RoundedButtonSize.MEDIUM]: {
    height: RoundedButtonHeight.MEDIUM,
    borderRadius: 12,
    borderWidth: 2,
    paddingLeft: 16,
    paddingRight: 16,
  },
  [RoundedButtonSize.LARGE]: {
    height: RoundedButtonHeight.LARGE,
    borderRadius: 16,
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },
  [`${RoundedButtonSize.SMALL}Text`]: {
    ...FontStyle.TITLE_MICRO,
  },

  [`${RoundedButtonSize.MEDIUM}Text`]: {
    ...FontStyle.TITLE_TINY,
  },

  [`${RoundedButtonSize.LARGE}Text`]: {
    ...FontStyle.TITLE_SMALL,
  },
  [`button-${ButtonColors.BLUE}`]: {
    backgroundColor: Color.BUTTON_BLUE_TEXT_COLOR,
    borderColor: Color.BUTTON_BLUE_TEXT_COLOR,
  },
  [`button-${ButtonColors.GREY}`]: {
    backgroundColor: Color.BUTTON_GRAY,
    borderColor: Color.BUTTON_GRAY,
  },
  inversedText: {
    color: Color.WHITE,
  },
  inversedGreyText: {
    color: Color.BUTTON_BLUE_TEXT_COLOR,
  },
});

const RoundedButton = ({
  containerStyle,
  buttonColor = ButtonColors.BLUE,
  size = RoundedButtonSize.MEDIUM,
  title,
  onPress,
}) => {
  const ViewComponent = isIOS ? SuperEllipseMask : View;

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <ViewComponent
        style={[
          styles.center,
          styles.row,
          styles[`button-${buttonColor}`],
          styles[size],
          { width: 256 },
        ]}
        {...(isIOS && { radius: styles[size].borderRadius, key: title })}
      >
        <Text
          allowFontScaling={false}
          style={[
            styles[`${size}Text`],
            styles.inversedText,
            buttonColor === ButtonColors.GREY && styles.inversedGreyText,
          ]}
        >
          {title}
        </Text>
      </ViewComponent>
    </TouchableOpacity>
  );
};

export default RoundedButton;
