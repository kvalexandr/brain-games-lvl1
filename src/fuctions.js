export const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const getRandomOperation = () => {
  const operation = ['sum', 'dif', 'multi'];
  return operation[getRandomNum(1, 3)];
};

export const getNod = (n1, n2) => {
  const iter = (a1, a2) => {
    const max = a1 > a2 ? a1 : a2;
    const min = a1 < a2 ? a1 : a2;
    const remainderOfDivision = max % min;
    if (remainderOfDivision === 0) return min;
    return iter(min, remainderOfDivision);
  };

  return iter(n1, n2);
};

export const isSimple = (n) => {
  if (n !== 1) {
    for (let i = 2; i <= n; i += 1) {
      if (n % i === 0 && i < n) return false;
    }
  }

  return true;
};
