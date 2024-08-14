export const getRandomStr = (strings: string[]) => {
  if (strings.length === 0) {
    return "";
  }
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
};
