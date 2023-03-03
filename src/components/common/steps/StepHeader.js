import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import StepPagination from './StepPagination';
import RichHeader from '../RichHeader';
import FadeableView from '../FadeableView';

const ANIMATION_DURATION = 500;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const StepHeader = ({
  containerStyle,
  title,
  icon,
  showPagination,
  dotsLength,
  activeDotIndex,
}) => (
  <FadeableView
    visible={showPagination}
    duration={ANIMATION_DURATION}
    style={[styles.container, containerStyle]}
  >
    <RichHeader title={title} icon={icon} />
    <StepPagination dotsLength={dotsLength} activeDotIndex={activeDotIndex} />
  </FadeableView>
);

StepHeader.propTypes = {
  containerStyle: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  icon: PropTypes.number,
  showPagination: PropTypes.bool,
  dotsLength: PropTypes.number,
  activeDotIndex: PropTypes.number,
};

StepHeader.defaultProps = {
  containerStyle: undefined,
  icon: undefined,
  showPagination: true,
  dotsLength: 0,
  activeDotIndex: 0,
};

export default StepHeader;
