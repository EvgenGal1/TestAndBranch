// []arr. > []str.
const mapArrToStrings = (arr) => {
  // возвращ.масс.Num провер.эл.arr > Numb >> преобраз. > str.
  return arr.filter((item) => Number.isInteger(item)).map(String);
};

module.exports = mapArrToStrings;
