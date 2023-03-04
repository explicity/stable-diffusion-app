import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import SuperEllipseMask from 'react-native-super-ellipse-mask';
import isFunction from 'lodash/isFunction';

import { isIOS } from '../../services/envHelper';
import { FontStyle, Color, Padding, TOP_BAR_HEIGHT } from '../../theme';

export const RichHeaderSize = {
  SMALL: 'small',
  LARGE: 'large',
};

export const RichIconSize = {
  [RichHeaderSize.SMALL]: 32,
  [RichHeaderSize.LARGE]: 40,
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  [`${RichHeaderSize.SMALL}Container`]: {
    paddingVertical: Padding.MEDIUM + Padding.TINY,
  },
  [`${RichHeaderSize.LARGE}Container`]: {
    paddingTop: Padding.MEDIUM * 2,
    paddingBottom: Padding.MEDIUM * 3,
  },
  screenContainer: {
    marginTop: TOP_BAR_HEIGHT,
  },
  [`${RichHeaderSize.SMALL}Icon`]: {
    width: RichIconSize[RichHeaderSize.SMALL],
    height: RichIconSize[RichHeaderSize.SMALL],
  },
  [`${RichHeaderSize.LARGE}Icon`]: {
    width: RichIconSize[RichHeaderSize.LARGE],
    height: RichIconSize[RichHeaderSize.LARGE],
  },
  doneAnimation: {
    position: 'absolute',
    left: Padding.MINIMAL / 2,
    right: 0,
  },
  [`${RichHeaderSize.SMALL}DoneAnimation`]: {
    top: -RichIconSize[RichHeaderSize.SMALL] * 0.75,
    height: RichIconSize[RichHeaderSize.SMALL] * 2.5,
  },
  [`${RichHeaderSize.LARGE}DoneAnimation`]: {
    top: -RichIconSize[RichHeaderSize.LARGE] * 0.75,
    height: RichIconSize[RichHeaderSize.LARGE] * 2.5,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: Padding.BIG / 2,
  },
  title: {
    textAlign: 'center',
    color: Color.BLACK(80),
  },
  [`${RichHeaderSize.SMALL}Title`]: {
    ...FontStyle.TITLE_SMALL,
    marginTop: Padding.TINY,
  },
  [`${RichHeaderSize.LARGE}Title`]: {
    ...FontStyle.CARD_TITLE_BIG,
    marginTop: Padding.TINY * 2,
  },
  description: {
    textAlign: 'center',
    color: Color.BLACK(60),
  },
  [`${RichHeaderSize.SMALL}Description`]: {
    ...FontStyle.TEXT_NORMAL,
    marginTop: Padding.TINY * 2,
  },
  [`${RichHeaderSize.LARGE}Description`]: {
    ...FontStyle.TEXT_BIG,
    marginTop: Padding.MEDIUM * 2,
  },
});

const RichHeader = ({
  icon = null,
  title,
  description,
  doneAnimation = false,
  size = RichHeaderSize.LARGE,
  screen,
}) => {
  const hasIconSection = !!icon || doneAnimation;

  const ViewComponent = isIOS ? SuperEllipseMask : View;

  const descriptionProps = {
    style: [styles.description, styles[`${size}Description`]],
  };

  return (
    <View
      style={[
        styles.center,
        styles[`${size}Container`],
        screen && styles.screenContainer,
      ]}
    >
      {hasIconSection && (
        <ViewComponent style={[styles.center, styles.iconContainer]}>
          {!!icon && (
            <FastImage
              source={icon}
              resizeMode={FastImage.resizeMode.contain}
              style={styles[`${size}Icon`]}
            />
          )}
          {doneAnimation && <View style={styles[`${size}Icon`]} />}
        </ViewComponent>
      )}
      {doneAnimation && (
        <View style={[styles.doneAnimation, styles[`${size}DoneAnimation`]]}>
          <LottieView
            autoPlay
            loop={false}
            // source={DONE_ANIMATION}
            speed={1.5}
          />
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={[styles.title, styles[`${size}Title`]]}>{title}</Text>
        {!!description && (
          <>
            {isFunction(description) ? (
              description(descriptionProps)
            ) : (
              <Text {...descriptionProps}>{description}</Text>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default RichHeader;
