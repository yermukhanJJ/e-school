# e-school
1.1 Чтобы скачать с гитхаба проект запускаем команду: git clone https://github.com/yermukhanJJ/e-school.git Путь\\к\\папку\\

1.1 Сначала чтобы запустить бэкенд, заходим в папку: C:\Users\User\Desktop\e-school\elschool-back

1.2 Создаем базу school

1.3 Через flyway запускаем миграцию(elschool -> Plugins -> flyway -> flyway:migrate)

1.4 Запускаем Spring приложение

1.5 После запуска в базе автоматический добавляются данные

1.6 После запуска бэк-енд заходим по папке C:\Users\User\Desktop\el\react-front-app

1.7 Скачаем нужные плагины по командам:

1.7.1 yarn add @mui/material

1.7.2. yarn add react-router-dom

1.8 Запускаем фронт-енд по команде: yarn start

1.9 После запуска сервера, заходим в браузере по адресу: http://localhost:3000/


2.0 Видим форму для аутентификаций

2.1 Я сделал аутентификацию через React поэтому логин и пароль был взят из онлайн сервиса для автотеста https://reqres.in/#support-heading


2.2.1 ========LOGIN: eve.holt@reqres.in =========
2.2.2 =========PASSWORD: cityslicka =============


2.3 После аутентификаций откроется окно где отображена все данные студентов (http://localhost:3000/home)

2.4 Если нажать на кнопку VIEW можно посмотреть отдельном окне информация студента по айди (http://localhost:3000/view/{id})

2.5 По нажатия кнопки DELETE можно удалить данные студента

2.6 Кнопка EDIT отправят нас в форму для редактирование информаций студента(http://localhost:3000/edit/{id})

2.7 По кнопке ADD можно добавить нового студента

2.8 Все запросы были тестированы в Postman

2.9 Выводить всех студентов: GET http://localhost:8081/el-school/students


3.0 Найти студента по айди GET http://localhost:8081/el-school/students/id

3.1 Добавить нового студента POST http://localhost:8081/el-school/students

3.2 Изменить данные студента PUT http://localhost:8081/el-school/students/id

3.3 Удалить студента DELETE http://localhost:8081/el-school/students/id

3.4 Для работы схемами базы данных использовал flyway

3.5 Перед тем как запускать Спринг, откройте базу по названию ***school***

3.6 А за тем flyway-migrate чтобы создать схему

3.7 А уже потом можна запускать Спринг
