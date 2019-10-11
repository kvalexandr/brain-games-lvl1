import readlineSync from 'readline-sync';

export const getNameUser = () => {
    const userName = readlineSync.question('May I have your name? ');
    return userName;
};
