import { useCallback, useMemo } from 'react';

import { openai } from '../App';

import { EMPTY_STRING, LOGO_IMAGE_SIZE } from '../services/constants';

const IMAGE_SIZE = `${LOGO_IMAGE_SIZE}x${LOGO_IMAGE_SIZE}`;

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
  const generateImagePrompt = useCallback(async (prompt) => {
    try {
      const generatePrompt = await openai.createCompletion({
        model: Engines.DA_VINCI,
        prompt: `I have a website for ${prompt}, and I want to generate a logo for it, can you generate a prompt for dall-e for me? make it long like 50 words, you don't need to tell me why you generated the prompt`,
        ...CompetionOptions,
      });

      const { data: { choices = [] } = {} } = generatePrompt;

      return choices[0]?.text || EMPTY_STRING;
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const generateImage = useCallback(async (prompt) => {
    try {
      if (!!prompt) {
        console.log('IMAGE_SIZE', IMAGE_SIZE);
        const response = await openai.createImage({
          prompt,
          n: 1,
          size: '512x512',
        });

        console.log('response', response);

        return response.data.data[0].url;
      }

      return null;
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return useMemo(
    () => ({ generateImagePrompt, generateImage }),
    [generateImagePrompt, generateImage]
  );
}
