
// src/utils/loadImages.js
// Only works with a **static string path**, not dynamic variables
export const loadImages = () => {
  // Import all images in the folder at build time
  const modules = import.meta.glob('../assets/client-logos/*.{png,webp,svg}', { eager: true });

  // Return an array of image paths
  return Object.values(modules).map((mod) => mod.default);
};