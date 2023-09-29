import createImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import config from '../sanity.config';
import { SanityImage } from '../types/recipe';

const builder = createImageUrlBuilder(config);

export const urlFor = (source: SanityImage) => {
  return builder.image(source);
};

export const client = createClient({
  projectId: 'jjty1uh3',
  dataset: 'production',
  apiVersion: '2021-08-31',
});
