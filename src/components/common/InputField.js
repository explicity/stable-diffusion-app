import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import SuperEllipseMask from 'react-native-super-ellipse-mask';
import isArray from 'lodash/isArray';

import SnapCarousel from './SnapCarousel';

import { isIOS } from '../../services/envHelper';
import { Color, FontStyle, Padding } from '../../theme';

const INPUT_HEIGHT = 48;
const MULTILINE_INPUT_HEIGHT = 128;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: Padding.SMALL * 2,
  },
  inputContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: Color.WHITE,
  },
  multilineContainer: {
    height: MULTILINE_INPUT_HEIGHT,
    justifyContent: 'center',
  },
  input: {
    height: INPUT_HEIGHT,
    paddingHorizontal: Padding.SMALL * 2,
  },
  multilineInput: {
    height: FontStyle.TITLE_MEDIUM.lineHeight * 4,
  },
  fixMultilinePadding: {
    paddingTop: -Padding.MINIMAL / 2,
  },
  inputText: {
    ...FontStyle.TITLE_MEDIUM,
  },
  carouselContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  carouselSliderContainer: {
    flex: 1,
    height: INPUT_HEIGHT,
    paddingHorizontal: Padding.SMALL * 2,
    justifyContent: 'center',
  },
  carouselSliderText: {
    ...FontStyle.TITLE_MEDIUM,
    color: Color.BLACK(20),
  },
});

const InputField = ({
  active,
  containerStyle,
  inputRef,
  placeholder,
  ...textInputProps
}) => {
  const hasRevolvingPlaceholder = isArray(placeholder);
  const showSnapCarousel =
    hasRevolvingPlaceholder && !textInputProps?.value && active;

  const renderCarouselItem = useCallback(
    ({ item }) => {
      const handlePress = () => textInputProps?.onChangeText(item);

      return (
        <TouchableOpacity
          onPress={handlePress}
          style={styles.carouselSliderContainer}
        >
          <Text allowFontScaling={false} style={styles.carouselSliderText}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [textInputProps?.onChangeText]
  );

  const ViewComponent = isIOS ? SuperEllipseMask : View;

  return (
    <View style={[styles.container, containerStyle]}>
      <ViewComponent
        style={[
          styles.inputContainer,
          textInputProps?.multiline && styles.multilineContainer,
        ]}
        {...(isIOS && { radius: styles.inputContainer.borderRadius })}
      >
        <TextInput
          ref={inputRef}
          style={[
            styles.input,
            textInputProps?.multiline && styles.multilineInput,
            textInputProps?.multiline && isIOS && styles.fixMultilinePadding,
            styles.inputText,
          ]}
          blurOnSubmit
          returnKeyType='done'
          allowFontScaling={false}
          underlineColorAndroid='transparent'
          {...(!hasRevolvingPlaceholder && { placeholder })}
          {...textInputProps}
        />
        {showSnapCarousel && (
          <SnapCarousel
            containerStyle={styles.carouselContainer}
            data={placeholder}
            renderItem={renderCarouselItem}
            keyboardShouldPersistTaps='always'
            useScrollView
          />
        )}
      </ViewComponent>
    </View>
  );
};

InputField.propTypes = {
  active: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]),
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) }),
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

InputField.defaultProps = {
  active: true,
  containerStyle: undefined,
  inputRef: undefined,
  placeholder: undefined,
};

export default memo(InputField);
