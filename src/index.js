import readlineSync from 'readline-sync';

const getNameUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default getNameUser;
