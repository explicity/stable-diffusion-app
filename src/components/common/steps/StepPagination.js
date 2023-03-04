import React, { useEffect, useState, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, Dimensions, View, StyleSheet } from 'react-native';
import SuperEllipseMask from 'react-native-super-ellipse-mask';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

import { isIOS } from '../../../services/envHelper';
import { Padding, Color } from '../../../theme';

const ANIMATION_DURATION = 200;

const PAGINATION_HEIGHT = 4;
const PAGINATION_WIDTH = 48;
const LARGE_DOTS_LENGTH = 5;

const getPaginationItemWidth = (dotsLength) =>
  (SCREEN_WIDTH - 72) / (dotsLength + 2);

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationItem: {
    height: PAGINATION_HEIGHT,
  },
  paginationItemContainer: {
    borderRadius: PAGINATION_HEIGHT / 3,
    marginHorizontal: Padding.TINY,
    overflow: 'hidden',
  },
});

const StepPaginationDot = ({ active, width }) => {
  const [color] = useState(new Animated.Value(0));

  const animate = (toValue) =>
    Animated.timing(color, {
      easing: Easing.linear,
      toValue,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();

  useEffect(() => animate(active ? 1 : 0), [active]);

  const animatedStyle = {
    backgroundColor: color.interpolate({
      inputRange: [0, 1],
      outputRange: [Color.INDICATOR_BRIGHT, Color.INDICATOR_DARK],
      outputRange: ['black', 'grey'],
    }),
  };

  const ViewComponent = isIOS ? SuperEllipseMask : View;

  return (
    <ViewComponent
      style={[styles.paginationItem, styles.paginationItemContainer, { width }]}
      {...(isIOS && { radius: styles.paginationItemContainer.borderRadius })}
      radius={styles.paginationItemContainer.borderRadius}
    >
      <Animated.View
        style={[styles.paginationItem, { width }, animatedStyle]}
      />
    </ViewComponent>
  );
};

StepPaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  width: PropTypes.number,
};

StepPaginationDot.defaultProps = {
  width: PAGINATION_WIDTH,
};

const StepPagination = ({ dotsLength, activeDotIndex }) => {
  const paginationItemWidth = useMemo(
    () =>
      dotsLength > LARGE_DOTS_LENGTH
        ? getPaginationItemWidth(dotsLength)
        : PAGINATION_WIDTH,
    [dotsLength]
  );

  const renderPaginationItem = (index) => {
    const active = activeDotIndex >= index;

    return (
      <StepPaginationDot
        key={index}
        active={active}
        width={paginationItemWidth}
      />
    );
  };

  if (!dotsLength) return null;

  return (
    <View style={styles.pagination}>
      {[...Array(dotsLength).keys()].map((_, index) =>
        renderPaginationItem(index)
      )}
    </View>
  );
};

StepPagination.propTypes = {
  dotsLength: PropTypes.number,
  activeDotIndex: PropTypes.number,
};

StepPagination.defaultProps = {
  dotsLength: 0,
  activeDotIndex: 0,
};

export default memo(StepPagination);
