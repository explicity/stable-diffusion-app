import { View, Text } from 'react-native';
import React from 'react';

import StepFlatList from '../common/steps/StepFlatList';
import PromptSlider from './components/PromptSlider';

import { Flows, FlowSteps } from '../common/steps/constants';

const ImageGenerationContainer = () => {
  return (
    <StepFlatList id={Flows.IMAGE_GENERATION}>
      <PromptSlider screenKey={FlowSteps[Flows.IMAGE_GENERATION].Prompt} />
    </StepFlatList>
  );
};

export default ImageGenerationContainer;
