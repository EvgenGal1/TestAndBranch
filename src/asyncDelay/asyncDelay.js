// вывод cb с задержкой
const asyncDelay = (callback, ms) => {
  // возвращ.Promise
  return new Promise((resolve) => {
    // использ.врем.ожид.
    setTimeout(() => {
      // вызов `решать` с `обратным вызовом`
      resolve(callback());
      // задержка в милисек.
    }, ms);
  });
};

// asyncDelay(() => 5 + 5, 1000).then((res) => console.log("res ", res));
// asyncDelay(() => 5 + 2, 500).then((res) => console.log("res ", res));
// src\asyncDelay> $$ node asyncDelay.js

module.exports = asyncDelay;
