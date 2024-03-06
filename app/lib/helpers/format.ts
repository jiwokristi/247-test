export const calculateFrequency = (arr: string[]) => {
  const frequencyMap: { [key: string]: number } = {};

  arr.forEach(word => {
    const lowercaseWord = word.toLowerCase();

    if (frequencyMap[lowercaseWord]) {
      frequencyMap[lowercaseWord]++;
    } else {
      frequencyMap[lowercaseWord] = 1;
    }
  });

  return Object.entries(frequencyMap).map(([word, frequency]) => ({
    word,
    frequency,
  }));
};
