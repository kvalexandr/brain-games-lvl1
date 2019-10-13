export const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const getRandomOperation = () => {
  const operation = ['sum', 'dif', 'multi'];
  return operation[getRandomNum(1, 3)];
};
