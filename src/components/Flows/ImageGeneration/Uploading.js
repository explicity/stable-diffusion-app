import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { useTranslation } from 'react-i18next';
import lowerFirst from 'lodash/lowerFirst';

import { Flows } from '../../common/steps/constants';
import { FontStyle, Padding } from '../../../theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const PULSE_ANIMATION = require('../../../theme/assets/animations/laguna-pulse.json');

const ANIMATION_OFFSET = 100;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  container: {
    paddingHorizontal: Padding.MEDIUM * 2,
  },
  text: {
    ...FontStyle.CARD_TITLE_NORMAL,
  },
  animationContainer: {
    width: SCREEN_WIDTH + ANIMATION_OFFSET,
    height: SCREEN_HEIGHT,
    left: -ANIMATION_OFFSET / 2,
    opacity: 0.3,
  },
});

const Uploading = forwardRef((_, ref) => {
  const { t } = useTranslation('flows');

  const [prompt, setPrompt] = useState(null);

  useImperativeHandle(ref, () => ({ setPrompt }));

  return (
    <View style={styles.flex}>
      {!!prompt && (
        <Animatable.View
          animation='fadeIn'
          useNativeDriver
          style={[styles.flex, styles.center, styles.container]}
        >
          <Text allowFontScaling={false} style={styles.text}>
           {t(`${lowerFirst(Flows.IMAGE_GENERATION)}.uploading.prompt`)}{prompt}
          </Text>
        </Animatable.View>
      )}
      <View style={[styles.absolute, styles.animationContainer]}>
        <LottieView autoPlay loop source={PULSE_ANIMATION} />
      </View>
    </View>
  );
});

export default Uploading;
