import React, { useState, useRef, useEffect } from 'react';
import { View, Text } from 'react-native';

import StepFlatList from '../../common/steps/StepFlatList';
import BasicInput from '../components/BasicInput';
import Uploading from './Uploading';
import ImageComplete from './ImageComplete';

import { useAIPrompt, usePrevious } from '../../../hooks';

import { Flows, FlowSteps } from '../../common/steps/constants';

const ImageGenerationContainer = ({ navigation }) => {
  const { generateImage } = useAIPrompt();

  const [imageUrl, setImageUrl] = useState(null);
  const [flowKey, setFlowKey] = useState(0);

  const prevImageUrl = usePrevious(imageUrl);

  const listRef = useRef(null);

  const goToNextStep = () => listRef?.current?.goToNextStep();

  const goToStep = (screenKey) => listRef?.current?.goToStep(screenKey);

  const goBack = () => navigation.goBack();

  useEffect(() => {
    if (!!imageUrl && imageUrl !== prevImageUrl) {
      goToNextStep();
    }
  }, [imageUrl]);

  const handleSubmitPrompt = async ({ title }) => {
    goToNextStep();
    setImageUrl(await generateImage(title));
  };

  const handleFlowReset = () => {
    console.log('here')
    setFlowKey(flowKey + 1);
    goToStep(FlowSteps[Flows.IMAGE_GENERATION].Prompt);
    setImageUrl(null);
  };

  return (
    <StepFlatList id={Flows.IMAGE_GENERATION} ref={listRef}>
      <BasicInput
        key={flowKey}
        screenKey={FlowSteps[Flows.IMAGE_GENERATION].Prompt}
        title={'Website idea generator'}
        placeholder={'Enter description'}
        skippable={false}
        onSubmit={handleSubmitPrompt}
      />
      <Uploading
        key={flowKey}
        screenKey={FlowSteps[Flows.IMAGE_GENERATION].Uploading}
      />
      <ImageComplete
        key={flowKey}
        screenKey={FlowSteps[Flows.IMAGE_GENERATION].Complete}
        imageUrl={imageUrl}
        onClose={goBack}
        onReset={handleFlowReset}
      />
    </StepFlatList>
  );
};

export default ImageGenerationContainer;
