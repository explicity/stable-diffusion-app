import { AppIcons } from '../../../services/assetsHelper';

export const Flows = {
  IMAGE_GENERATION: 'ImageGeneration',
};

export const FlowIcons = {
  [Flows.IMAGE_GENERATION]: AppIcons.IMAGES.free,
};

export const FlowSteps = {
  [Flows.IMAGE_GENERATION]: {
    Prompt: 'Prompt',
    Uploading: 'Uploading',
    Complete: 'Complete',
  },
};

export const FlowStepsPagination = {
  [Flows.IMAGE_GENERATION]: {
    [FlowSteps[Flows.IMAGE_GENERATION].Prompt]: true,
    [FlowSteps[Flows.IMAGE_GENERATION].Uploading]: true,
    [FlowSteps[Flows.IMAGE_GENERATION].Complete]: null,
  },
};
