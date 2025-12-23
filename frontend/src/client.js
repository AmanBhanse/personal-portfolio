import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || "o5jbqmpw",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  if (!source) {
    console.warn(
      "urlFor called with undefined/null source:",
      new Error().stack
    );
    return null;
  }
  return builder.image(source);
};
