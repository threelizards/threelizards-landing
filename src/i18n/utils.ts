export const getNextYear = () => {
  const today = new Date();
  return today.getTime() + 31536000000;
};
