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
$$ npx create react app ./ - устан.react приложение
## App/.test.js Комп./тест - отрисовки h1, btn, input(+снимок) >> describe/test/render.Комп./screen.getByText|Role|PlaceholderText|debug/expect.toBeInTheDocument|toMatchSnapshot,test,PASS
!! ч/з спец.объ.screen(`экран`).мтд. ПОЛУЧ.ЭЛ. (по тексту, роли, тегу, стилю, props, т.д. и т.п.)
!! при ошб./не раб./FAIT тест - вызов screen.debug - отрисовка сгенер.разметки в renderе
## App/.test.js Комп./тест - отсутствие/асинхр(usSt/usEf/setTim/усл.ренд.) >> query/find
!! screen.мтд.: Get(поиск.эл.на стр.иначе ошб.), Query(нет на стр.), Find(асинхр.)
## App/.test.js Комп./тест - стили эл. >> toHaveStyle,test,PASS
!! ч/з спец.объ.fireEvent(`огненное событие`).мтд. ВЫЗЫВАЕМ СОБЫТИЕ ЭЛ. (кнп., inpt, клик, измен., копир., мышь, т.д. и т.п.)
## App/.test.js Комп./тест - события эл.КЛИК(usSt/onClick/data-testid) >> getByTestId/fireEvent.click,test,PASS
## App/.test.js Комп./тест - события эл.INPUT(usSt/onChange/data-testid) >> fEvent.input,test,PASS
!! ч/з спец.объ.userEvent(`пользовательское событие`).мтд. СОБЫТИЕ ВЗАИМОДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ С ЭЛ. (hover, tab, keyboard, клик, измен., копир., мышь, т.д. и т.п.)
## App/.test.js Комп./тест - события эл.INPUT(usSt/onChange/data-testid) >> userEvent.input,test,PASS
$$ npm i axios - асинх.req
++ users/users/.test.js Комп./тест - асинхр.получ.польз.(usSt/usEf/axios/data-testid) >> describe/test/beforeEach/render/mock/axios.get/screen.findAllByTestId|debug/expect.toBe|toHaveBeenCalledTimes,test,PASS
$$ npm i react-router-dom - маршрт.стр.
## index,App.js Комп. - подкл.стр., вкл.,лог.router, чистка
++ Комп.Main,About.jsx - страницы
++ Router.test.js тест react-router-dom describe/test/act/userEvent.click/screen.getByTestId,test,PASS
## index,App/.test.js Комп./тест - перенос BrowserRouter в ind >> кажд.test App.оборач.в MemoryRouter test,PASS
++ Комп.ErrorPage.jsx - не существующая страница
## App/Router.test.js Комп./тест - path="/*" >> MemoryRouter initialEntries={["/qwerty"]}, scr.testId."not-found-page",test,PASS
$+ sass | index.scss - cl.,stl.,архитектура, правки
++ Комп.UserDetalisPage.jsx - данн.1го польз., подкл., stl
## Users/.test.js Комп./тест - div<>Link >> async, MemoryRouter.initialEntries={["/users"]},Routes>Route, scr.testId, userEvent.click, test,PASS
++ Комп.AppRouter Комп.общ.стр. Routes.Route из App
## App.js Routes.Route<>AppRouter замена общ.AppRouter
## Users.test.js тест >> замена initialEntries>Routes>Route на Комп.AppRouter + Users
++ tests/helpers/renderWithRouter.js helper переходов м/у стр.(экспорт fn.отрисовки всех маршрутов и Комп. Приним.Комп.отрисовки и начальн.маршрут)
## Users.test.js тест >> замена Комп.AppRouter + Users на renderWithRouter



!! https://habr.com/ru/companies/elbrusbootcamp/articles/651033/ - форма отправки денег с кошельков