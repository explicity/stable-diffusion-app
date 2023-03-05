import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import lowerFirst from 'lodash/lowerFirst';

import StepFlatList from '../../common/steps/StepFlatList';
import BasicInput from '../components/BasicInput';
import Uploading from './Uploading';
import ImageComplete from './ImageComplete';

import { useAIPrompt, usePrevious } from '../../../hooks';
import { addImage } from '../../../store/images';

import { Flows, FlowSteps } from '../../common/steps/constants';

const ImageGenerationContainer = ({ navigation }) => {
  const { t } = useTranslation('flows');
  const { generateImage, generateImagePrompt } = useAIPrompt();
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState(null);
  const [flowKey, setFlowKey] = useState(0);

  const prevImageUrl = usePrevious(imageUrl);

  const listRef = useRef(null);
  const uploadingRef = useRef(null);

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

    const prompt = await generateImagePrompt(title);
    uploadingRef?.current?.setPrompt(prompt);

    const imageResponse = await generateImage(prompt);

    if (!!imageResponse) {
      setImageUrl(imageResponse);
      dispatch(addImage(imageResponse));
    }
  };

  const handleFlowReset = () => {
    setFlowKey(flowKey + 1);
    goToStep(FlowSteps[Flows.IMAGE_GENERATION].Prompt);
    setImageUrl(null);
  };

  return (
    <StepFlatList id={Flows.IMAGE_GENERATION} ref={listRef}>
      <BasicInput
        key={flowKey}
        screenKey={FlowSteps[Flows.IMAGE_GENERATION].Prompt}
        title={t(`${lowerFirst(Flows.IMAGE_GENERATION)}.prompt.title`)}
        placeholder={t(
          `${lowerFirst(Flows.IMAGE_GENERATION)}.prompt.placeholder`
        )}
        skippable={false}
        multiline
        onSubmit={handleSubmitPrompt}
      />
      <Uploading
        key={flowKey}
        screenKey={FlowSteps[Flows.IMAGE_GENERATION].Uploading}
        ref={uploadingRef}
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
