export const getRandomNum = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

export const getRandomOperation = () => {
  const operation = ['sum', 'dif', 'multi'];
  return operation[getRandomNum(1, 3)];
};

export const nod = (n1, n2) => {
  const iter = (a1, a2) => {
    const max = a1 > a2 ? a1 : a2;
    const min = a1 < a2 ? a1 : a2;
    const ost = max % min;
    if (ost === 0) return min;
    return iter(min, ost);
  };

  return iter(n1, n2);
};

export const simple = (n) => {
  let res = true;

  if (n !== 1) {
    for (let i = 2; i <= n; i += 1) {
      if (n % i === 0 && i < n) res = false;
    }
  }

  return res;
};
