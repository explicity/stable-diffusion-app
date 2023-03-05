const IMAGE_SIZE = 512;

export const Engines = {
  DA_VINCI: 'text-davinci-003',
  CONTENT_FILTER: 'content-filter-alpha',
};

export const CompetionOptions = {
  max_tokens: 256,
  temperature: 0.7,
};

export const ImageOptions = {
  n: 1,
  size: `${IMAGE_SIZE}x${IMAGE_SIZE}`,
};
