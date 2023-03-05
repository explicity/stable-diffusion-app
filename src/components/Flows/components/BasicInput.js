import React, { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import RichHeader from '../../common/RichHeader';
import InputField from '../../common/InputField';
import RoundedButton, {
  RoundedButtonHeight,
  ButtonColors,
} from '../../common/buttons/RoundedButton';

import { BOTTOM_SAFE_INDENT, ROUND_BUTTON_WIDTH } from '../constants';
import { behaviorPadding } from '../../../services/envHelper';
import { EMPTY_STRING } from '../../../services/constants';
import { Padding, MODAL_ANIMATION_DURATION } from '../../../theme';

const KEYBOARD_OPENING_DURATION = 600;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  autocompleteContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: Padding.MEDIUM + Padding.SMALL,
  },
  buttonContainer: {
    width: ROUND_BUTTON_WIDTH,
  },
  buttonPlaceholder: {
    height: RoundedButtonHeight.MEDIUM,
  },
});

const BasicInput = ({
  active,
  title,
  description,
  doneTitle,
  skipTitle,
  placeholder,
  onSkip,
  onSubmit,
  renderTextInput,
  skippable,
  multiline,
}) => {
  const { t } = useTranslation('flows');

  const [value, setValue] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (active && !renderTextInput) {
      setTimeout(() => {
        inputRef.current.focus();
      }, Platform.select({ ios: 0, android: MODAL_ANIMATION_DURATION }));
    }
  }, [active]);

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (!value && onSkip) {
      setTimeout(onSkip, KEYBOARD_OPENING_DURATION / 2);
      return;
    }
    if (onSubmit) {
      setTimeout(
        () => onSubmit({ title: value?.trim() }),
        KEYBOARD_OPENING_DURATION / 2
      );
    }
  };

  const showSubmitButton = !value ? skippable : true;

  const buttonTitle = value ? doneTitle || t('next') : skipTitle || t('skip');

  return (
    <View style={[styles.flex, styles.container]}>
      <RichHeader title={title} description={description} />
      <KeyboardAvoidingView
        style={styles.contentContainer}
        behavior={behaviorPadding}
        keyboardVerticalOffset={BOTTOM_SAFE_INDENT * 2}
      >
        {renderTextInput ? (
          renderTextInput({ onChangeText: setValue })
        ) : (
          <InputField
            active={active}
            inputRef={inputRef}
            containerStyle={styles.inputContainer}
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            onSubmitEditing={handleSubmit}
            multiline={multiline}
          />
        )}
        {showSubmitButton ? (
          <RoundedButton
            {...(!value && {
              buttonColor: ButtonColors.GREY,
            })}
            title={buttonTitle}
            containerStyle={styles.buttonContainer}
            roundCorners
            onPress={handleSubmit}
          />
        ) : (
          <View style={styles.buttonPlaceholder} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

BasicInput.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  doneTitle: PropTypes.string,
  skipTitle: PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onSkip: PropTypes.func,
  onSubmit: PropTypes.func,
  renderTextInput: PropTypes.func,
  skippable: PropTypes.bool,
  multiline: PropTypes.bool,
};

BasicInput.defaultProps = {
  active: true,
  description: undefined,
  doneTitle: undefined,
  skipTitle: undefined,
  placeholder: EMPTY_STRING,
  onSkip: undefined,
  onSubmit: undefined,
  renderTextInput: undefined,
  skippable: true,
  multiline: false,
};

export default memo(BasicInput);
