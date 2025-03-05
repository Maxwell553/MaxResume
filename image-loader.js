export default function customImageLoader({ src, width, quality }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/MaxResume' : '';
  
  // If the src already starts with http or https, return it as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // If the src already includes the basePath, don't add it again
  if (process.env.NODE_ENV === 'production' && !src.startsWith(basePath) && !src.startsWith('/')) {
    return `${basePath}/${src}`;
  }
  
  // For local development or if the path already has the correct prefix
  return src;
} 