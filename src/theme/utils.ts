export const getRelativeLuminance = (color: string) => {
  const r = parseInt(color.substring(1, 3), 16) / 255;
  const g = parseInt(color.substring(3, 5), 16) / 255;
  const b = parseInt(color.substring(5, 7), 16) / 255;

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
