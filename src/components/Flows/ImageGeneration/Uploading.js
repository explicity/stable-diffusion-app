import React, {
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Dimensions, View, Text, StyleSheet, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { useTranslation } from 'react-i18next';
import lowerFirst from 'lodash/lowerFirst';

import { TOP_SAFE_INDENT } from '../constants';
import { Flows } from '../../common/steps/constants';
import {
  CompetionOptions,
  ImageOptions,
  Engines,
} from '../../../services/requestsHelper';
import { Color, FontStyle, Padding } from '../../../theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const PULSE_ANIMATION = require('../../../theme/assets/animations/laguna-pulse.json');

const ANIMATION_OFFSET = 100;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  container: {
    paddingTop: TOP_SAFE_INDENT + Padding.MEDIUM * 2,
    paddingHorizontal: Padding.MEDIUM * 2,
  },
  contentContainer: {
    marginBottom: Padding.MEDIUM,
  },
  optionContainer: {
    marginBottom: Padding.TINY,
    paddingLeft: Padding.SMALL,
  },
  labelText: {
    ...FontStyle.TEXT_BIG,
    fontWeight: 'bold',
    color: Color.BLACK(90),
  },
  text: {
    ...FontStyle.TEXT_BIG,
    fontWeight: 'normal',
    color: Color.BLACK(),
  },
  secondaryText: {
    ...FontStyle.TEXT_SMALL,
  },
  listText: {
    paddingLeft: Padding.SMALL * 2,
  },
  animationContainer: {
    width: SCREEN_WIDTH + ANIMATION_OFFSET,
    height: SCREEN_HEIGHT,
    left: -ANIMATION_OFFSET / 2,
    opacity: 0.3,
  },
});

const Uploading = forwardRef(({ active }, ref) => {
  const { t } = useTranslation('flows');

  const [prompt, setPrompt] = useState(null);

  const CompetionOptionsDescription = useMemo(
    () =>
      ['prompt', ...Object.keys(CompetionOptions)].reduce((acc, key) => {
        acc[key] = t(`params.competion.${key}`);
        return acc;
      }, {}),
    [CompetionOptions]
  );

  const ImageOptionsDescription = useMemo(
    () =>
      ['prompt', ...Object.keys(ImageOptions)].reduce((acc, key) => {
        acc[key] = t(`params.image.${key}`);
        return acc;
      }, {}),
    [ImageOptions]
  );

  useImperativeHandle(ref, () => ({ setPrompt }));

  const renderParameters = (options, description) =>
    options.map(([key, value]) => (
      <View style={styles.optionContainer}>
        <Text allowFontScaling={false} style={styles.text}>
          • {key}
          {!!String(value) ? ':' : ''} {String(value)}
        </Text>
        <Text
          allowFontScaling={false}
          style={[styles.secondaryText, styles.listText]}
        >
          - {description[key]}
        </Text>
      </View>
    ));

  return (
    <>
      <View style={[styles.absolute, styles.animationContainer]}>
        <LottieView autoPlay loop source={PULSE_ANIMATION} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.flex}
        contentContainerStyle={styles.container}
      >
        <Animatable.View
          animation={active ? 'fadeIn' : null}
          useNativeDriver
          style={styles.contentContainer}
        >
          <Text allowFontScaling={false} style={styles.labelText}>
            {t(`${lowerFirst(Flows.IMAGE_GENERATION)}.uploading.model`)}
            <Text style={styles.text}>{Engines.DA_VINCI}</Text>
          </Text>
        </Animatable.View>

        <Animatable.View animation={active ? 'fadeIn' : null} useNativeDriver>
          <View style={styles.contentContainer}>
            <Text allowFontScaling={false} style={styles.labelText}>
              {t(
                `${lowerFirst(
                  Flows.IMAGE_GENERATION
                )}.uploading.promptParameters`
              )}
            </Text>
            {renderParameters(
              Object.entries({ prompt: '', ...CompetionOptions }),
              CompetionOptionsDescription
            )}
          </View>
          <View style={styles.contentContainer}>
            <Text allowFontScaling={false} style={styles.labelText}>
              {t(
                `${lowerFirst(
                  Flows.IMAGE_GENERATION
                )}.uploading.imageParameters`
              )}
            </Text>
            {renderParameters(
              Object.entries({ prompt: '', ...ImageOptions }),
              ImageOptionsDescription
            )}
          </View>
        </Animatable.View>

        {!!prompt && (
          <Animatable.View animation='fadeIn' useNativeDriver>
            <Text allowFontScaling={false} style={styles.labelText}>
              {t(`${lowerFirst(Flows.IMAGE_GENERATION)}.uploading.prompt`)}
              <Text allowFontScaling={false} style={styles.text}>
                {prompt.trim()}
              </Text>
            </Text>
          </Animatable.View>
        )}
      </ScrollView>
    </>
  );
});

export default Uploading;
