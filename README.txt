Повторение/узучение различных скилов по веткам репозиротия (Git) и Тестированию (Jest, React Testing Library, e2e, screenshot)


!! UlbiTV - https://www.youtube.com/watch?v=y2emL1fMRyY&t=757s
!! webDev - https://www.youtube.com/watch?v=v4pycbXkP1Y&list=PLNkWIWHIRwMEsMUc0B-lYb7DTLroWlKLK&index=1



++++ UlbiTV (Jest, React Testing Library, e2e, screenshot)

!! Пирамида тестирования:
  Unit (Jest), 
  Скриншотные тесты (storybook, loki), 
  Integration (RTLibr - RRDom, Redux), 
  e2e (WebdriverIO - cypress, puppeteer, hermione)

$$ git checkout -b test__UTV-Jest/RTLibr/e2e/scrsh
$$ npm i -D jest
++ validateValue./test.js - fn/тест пров.value в опред.знач. >> describe/toBe,test,PASS
++ mapArrToStrings./test.js - fn/тест провращ.arr > str. >> describe/toEqual/not,test,PASS
++ mapArrToStrings./test.js - fn/тест возвед.num в квадрат >> describe/toBe/toBeLessThan/toBeGreaterThan/toBeUndefined/not,test,PASS
