import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityCred = require('./sanityCred.json');

export const client = sanityClient({
  projectId: sanityCred.projectId,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: sanityCred.token,

});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
