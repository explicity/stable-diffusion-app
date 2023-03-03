import { useState, useEffect, useMemo } from 'react';

import { openai } from '../App';

export default function useAIPrompt() {
  const generateImage = async (userPrompt) => {
    const generatePrompt = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `I have a website for ${userPrompt}, and I want to generate a logo for it, can you generate a prompt for dall-e for me? make it long like 50 words, you don't need to tell me why you generated the prompt`,
      max_tokens: 256,
      temperature: 0.7,
      top_p: 1,
      n: 1,
      echo: false,
      stream: false,
      logprobs: null,
    });

    if (!!generatePrompt?.data?.choices?.length) {
      const imageParameters = {
        prompt: generatePrompt?.data?.choices[0]?.text,
        n: 1,
        size: '256x256',
      };
      const response = await openai.createImage(imageParameters);
      const urlData = response.data.data[0].url;

      console.log(urlData);

      return urlData;
    }
  };

  return useMemo(() => ({ generateImage }), [generateImage]);
}
