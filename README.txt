Повторение/узучение различных скилов по веткам репозиротия (Git) и Тестированию (Jest, React Testing Library, e2e, screenshot)


!! UlbiTV - https://www.youtube.com/watch?v=y2emL1fMRyY&t=757s
!! webDev - https://www.youtube.com/watch?v=v4pycbXkP1Y&list=PLNkWIWHIRwMEsMUc0B-lYb7DTLroWlKLK&index=1



++++ UlbiTV (Jest, React Testing Library, e2e, screenshot)

!! Пирамида тестирования:
  e2e (WebdriverIO - cypress, puppeteer, hermione) ~ 10% от общ.кол-ва
  Integration (RTLibr - RRDom, Redux) ~ 20-30%
  Скриншотные тесты (storybook, loki) ~ 70-80%
  Unit (Jest) ~ 70-80%

!! Два вида тестирования
  Функциональное (здесь)
    Модульное (unit) - отд.куски системы (fn, help, мтд.кл.,)
    Интеграционное - тест связки модулей, компонентов, router, redux
    end-to-end(e2e) - авто проверка функциональности на реальных данных (клики, переходы стр., заполн.форм, регистр., оплаты)
    скриншотные - показ разницы в изначальных скриншотах страницы с новыми
  Нефункциональные
    Нагрузочное тест-ие
    Тест-ие безопасности
    Регрессионное тест-ие

!! Квадрат тестирования
  проверка допустимого значения
  проверка пограничных значений
  проверка не валидных значений

!! Ветки - test__UTV-Jest/RTLibr/e2e/scrsh

++ JEST
$$ git checkout -b test__UTV-Jest
$$ npm i -D jest - устан тест jest в разработку
++ validateValue./test.js - fn/тест пров.value в опред.знач. >> describe/toBe,test,PASS
++ mapArrToStrings./test.js - fn/тест провращ.arr > str. >> describe/toEqual/not,test,PASS
++ square./test.js - fn/тест возвед.num в квадрат >> describe/toBe/toBeLessThan/toBeGreaterThan/not.toBeUndefined,test,PASS
++ spyMathPowMock./test.js - fn/тест возврат.1 | возвед.в степень >> describe/spyOn/toBeCalledTimes/beforeEach/beforeAll/afterEach/afterAll,test,PASS
++ asyncDelay./test.js - fn/тест вывод cb с задержкой >> describe/asyns/callback/toBe/toEqual,test,PASS
$$ npm i axios - асинх.req
++ getData./test.js - fn/тест получ.[]users.id в []str. >> describe/asyns/mock/beforeEach/toBeCalledTimes/toEqual/toMatchSnapshot,test,PASS

++ React Testing Library (RTLibr)
$$ git checkout -b test__UTV-RTLibr
$$ npx create react app ./ - устан.react приложение
## App/.test.js Комп./тест отрисовки h1, btn, input(+снимок) >> describe/test/render.Комп./screen.getByText|Role|PlaceholderText|debug/expect.toBeInTheDocument|toMatchSnapshot,test,PASS