// получ.[]users.id в []str.
// асинхр.req
const axios = require("axios");
// fn превращ.[]arr. > []str.
const mapArrToStrings = require("../mapArrToString/mapArrToStrings");

const getData = async (req, res, next) => {
  try {
    // запрос на внешн.сервис
    const response = await axios.get(
      "https://jsonplaceholder.org/users",
      // ! не раб. limit
      { params: { limit: 5 } }
    );
    // []id польз-ей
    const usersId = response.data.map((user) => user.id); // [ 1, 2, 3 ]
    // возращ.[]str. user.id // ^ мини integr тест
    return mapArrToStrings(usersId); // [ '1', '2', '3' ]
    // return usersId; // ! ошб.при возврат.не []str. в toEqual и toMatchSnapshot
  } catch (error) {
    console.log("error ", error);
  }
};

module.exports = getData;
