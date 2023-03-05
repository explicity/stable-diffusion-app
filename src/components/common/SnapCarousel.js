import React, { useState, useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Color, Padding } from '../../theme';

const DEFAULT_DOT_SIZE = 6;

const styles = StyleSheet.create({
  dotContainer: {
    marginHorizontal: Padding.TINY,
  },
  dot: {
    width: DEFAULT_DOT_SIZE,
    height: DEFAULT_DOT_SIZE,
  },
  paginationContainer: {
    paddingVertical: Padding.MEDIUM * 2,
  },
});

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const AUTOPLAY_DELAY = 2000;

const SnapCarousel = forwardRef(
  (
    {
      autoplay,
      containerStyle,
      onPress,
      onSnapToItem,
      hasPagination,
      ...props
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSnapToItem = useCallback(
      (index) => {
        setActiveIndex(index);

        if (onSnapToItem) onSnapToItem(index);
      },
      [onSnapToItem]
    );

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={!onPress}
        style={containerStyle}
      >
        <Carousel
          ref={ref}
          {...(autoplay && {
            autoplay,
            autoplayDelay: AUTOPLAY_DELAY,
            loop: true,
            lockScrollWhileSnapping: true,
            scrollEnabled: false,
            activeAnimationType: 'spring',
          })}
          onSnapToItem={handleSnapToItem}
          {...props}
        />
        {hasPagination && (
          <Pagination
            dotsLength={props.data.length}
            activeDotIndex={activeIndex}
            inactiveDotScale={1}
            inactiveDotColor={Color.INTERNAL_NOTIFICATION}
            dotStyle={styles.dot}
            dotContainerStyle={styles.dotContainer}
            dotColor={Color.PAGINATION_DOT}
            containerStyle={styles.paginationContainer}
          />
        )}
      </TouchableOpacity>
    );
  }
);

SnapCarousel.propTypes = {
  autoplay: PropTypes.bool,
  containerStyle: PropTypes.shape({}),
  onPress: PropTypes.func,
  onSnapToItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  hasPagination: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  sliderWidth: PropTypes.number,
  itemWidth: PropTypes.number,
};

SnapCarousel.defaultProps = {
  autoplay: true,
  containerStyle: undefined,
  hasPagination: false,
  onPress: null,
  onSnapToItem: null,
  sliderWidth: SCREEN_WIDTH,
  itemWidth: SCREEN_WIDTH,
};

export default SnapCarousel;
