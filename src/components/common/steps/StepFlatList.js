import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  cloneElement,
  Children,
  forwardRef,
  useImperativeHandle,
  memo,
} from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, FlatList, StyleSheet } from 'react-native';
import isBoolean from 'lodash/isBoolean';
import lowerFirst from 'lodash/lowerFirst';
import { useTranslation } from 'react-i18next';

import StepHeader from './StepHeader';
import Step from './Step';

import { Flows, FlowIcons, FlowSteps, FlowStepsPagination } from './constants';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

const StepFlatList = forwardRef(({ id, children }, ref) => {
  const { t } = useTranslation('flows');

  const filteredChildren = useMemo(
    () => Children.toArray(children).filter(Boolean),
    [children]
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [screenKey, setScreenKey] = useState(
    filteredChildren[0]?.props?.screenKey
  );
  const [totalSteps] = useState(filteredChildren.length || 0);

  useEffect(() => {
    setScreenKey(filteredChildren[currentStep]?.props?.screenKey);
  }, [currentStep]);

  const flatListRef = useRef(null);

  const viewabilityConfig = useRef({
    minimumViewTime: 200,
    itemVisiblePercentThreshold: 60,
  }).current;

  const goToPreviousStep = () => {
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep - 1,
    });
    setCurrentStep(currentStep - 1);
  };

  const goToNextStep = () => {
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: currentStep + 1,
    });
    setCurrentStep(currentStep + 1);
  };

  const goToStep = (key) => {
    const index = Object.values(FlowSteps[id]).findIndex(
      (item) => item === key
    );

    flatListRef?.current?.scrollToIndex({
      animated: true,
      index,
    });
    setCurrentStep(index);
  };

  const getItemLayout = (_, index) => ({
    length: SCREEN_WIDTH,
    offset: SCREEN_WIDTH * index,
    index,
  });

  const content = Children.map(filteredChildren, (child, index) =>
    cloneElement(child, {
      active: index === currentStep,
      displayPrevious: currentStep > 0,
      displayNext: currentStep < totalSteps,
      goToPreviousStep,
      goToNextStep,
      goToStep,
    })
  );

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({ item, index }) => {
    const active = index === currentStep;

    return <Step item={item} active={active} />;
  };

  const dotsLength = useMemo(
    () =>
      id
        ? Object.values(FlowStepsPagination[id]).filter(Boolean).length
        : children?.length || 0,
    [id]
  );

  const activeDotIntex = useMemo(() => {
    if (!id) return currentStep;

    const screenKeyIndex = Object.keys(FlowStepsPagination[id]).findIndex(
      (key) => key === screenKey
    );

    return (
      Object.values(FlowStepsPagination[id])
        .slice(0, screenKeyIndex + 1)
        .filter(Boolean).length - 1
    );
  }, [id, screenKey, currentStep]);

  const showPagination = useMemo(
    () => (id ? isBoolean(FlowStepsPagination[id][screenKey]) : false),
    [id, screenKey]
  );

  useImperativeHandle(
    ref,
    () => ({ goToPreviousStep, goToNextStep, goToStep }),
    [currentStep]
  );

    console.log(t(`${lowerFirst(id)}.title`))

  return (
    <View style={styles.flex}>
      <StepHeader
        title={t(`${lowerFirst(id)}.title`)}
        icon={FlowIcons[id]}
        showPagination={showPagination}
        dotsLength={dotsLength}
        activeDotIndex={activeDotIntex}
        containerStyle={styles.headerContainer}
      />
      <FlatList
        ref={flatListRef}
        scrollEnabled={false}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        data={content}
        keyExtractor={keyExtractor}
        initialNumToRender={1}
        renderItem={renderItem}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={getItemLayout}
        keyboardShouldPersistTaps='handled'
        overScrollMode='never'
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
});

StepFlatList.propTypes = {
  id: PropTypes.oneOf(Object.values(Flows)),
  children: PropTypes.node.isRequired,
};

StepFlatList.defaultProps = {
  id: null,
};

export default memo(StepFlatList);
