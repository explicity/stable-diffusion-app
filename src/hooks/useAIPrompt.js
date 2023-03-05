import { useCallback, useMemo } from 'react';

import { openai } from '../App';

import { EMPTY_STRING } from '../services/constants';
import {
  CompetionOptions,
  ImageOptions,
  Engines,
} from '../services/requestsHelper';

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
        const response = await openai.createImage({
          prompt,
          ...ImageOptions,
        });

        return response.data.data[0].url || null;
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
