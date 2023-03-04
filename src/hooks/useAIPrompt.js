import { useCallback, useMemo } from 'react';

import { openai } from '../App';

const IMAGE_SIZE = '256x256';

const Engines = {
  DA_VINCI: 'text-davinci-003',
  CONTENT_FILTER: 'content-filter-alpha',
};

const CompetionOptions = {
  max_tokens: 256,
  temperature: 0.7,
  top_p: 1,
  n: 1,
  echo: false,
  stream: false,
  logprobs: null,
};

export default function useAIPrompt() {
  const generateImage = useCallback(async (userPrompt) => {
    const generatePrompt = await openai.createCompletion({
      model: Engines.DA_VINCI,
      prompt: `I have a website for ${userPrompt}, and I want to generate a logo for it, can you generate a prompt for dall-e for me? make it long like 50 words, you don't need to tell me why you generated the prompt`,
      ...CompetionOptions,
    });

    const { data: { choices = [] } = {} } = generatePrompt;

    if (!!choices.length) {
      const imageParameters = {
        prompt: choices[0]?.text,
        n: 1,
        size: IMAGE_SIZE,
      };

      const response = await openai.createImage(imageParameters);

      console.log('response.data.data[0].url', response.data.data[0].url);

      return response.data.data[0].url;
    }

    return null;
  }, []);

  return useMemo(() => ({ generateImage }), [generateImage]);
}
