export const validateCode = (code: string): boolean => {
  //All letters comes first and then numbers
  return /^[A-Z]+[0-9]+$/.test(code);
};

export const generateRandomCode = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const letterLength = Math.abs(Math.random() * 10);
  const numberLength = Math.abs(Math.random() * 5);

  // random sequence of letters
  let letterPart = "";
  for (let i = 0; i < letterLength; i++) {
    letterPart += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  // random sequence of numbers
  let numberPart = "";
  for (let i = 0; i < numberLength; i++) {
    numberPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  const generatedCode = `${letterPart}${numberPart}`;

  return generatedCode;
};
