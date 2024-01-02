// возврат.1 || возвед.в степень
const spyMathPowMock = (number) => {
  if (number === 1) {
    return 1;
  }
  // возвед.в степень 2
  return Math.pow(number, 2);
};

module.exports = spyMathPowMock;
