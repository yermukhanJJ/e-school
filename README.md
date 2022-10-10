# e-school
Чтобы скачать с гитхаба проект запускаем команду: git clone https://github.com/yermukhanJJ/e-school.git Путь\\к\\папку\\
Сначала чтобы запустить бэкенд, заходим в папку: C:\Users\User\Desktop\e-school\elschool-back
Создаем базу school
Через flyway запускаем миграцию(elschool -> Plugins -> flyway -> flyway:migrate)
Запускаем Spring приложение
После запуска в базе автоматический добавляются данные
После запуска бэк-енд заходим по папке C:\Users\User\Desktop\el\react-front-app
Скачаем нужные плагины по командам:
1. yarn add @mui/material
2. yarn add react-router-dom
Запускаем фронт-енд по команде: yarn start
После запуска сервера, заходим в браузере по адресу: http://localhost:3000/
Видим форму для аутентификаций
Я сделал аутентификацию через React поэтому логин и пароль был взят из онлайн сервиса для автотеста https://reqres.in/#support-heading
========LOGIN: eve.holt@reqres.in =========
=========PASSWORD: cityslicka =============
После аутентификаций откроется окно где отображена все данные студентов (http://localhost:3000/home)
Если нажать на кнопку VIEW можно посмотреть отдельном окне информация студента по айди (http://localhost:3000/view/{id})
По нажатия кнопки DELETE можно удалить данные студента
Кнопка EDIT отправят нас в форму для редактирование информаций студента(http://localhost:3000/edit/{id})
По кнопке ADD можно добавить нового студента
Все запросы были тестированы в Postman
Выводить всех студентов: GET http://localhost:8081/el-school/students
Найти студента по айди GET http://localhost:8081/el-school/students/id
Добавить нового студента POST http://localhost:8081/el-school/students
Изменить данные студента PUT http://localhost:8081/el-school/students/id
Удалить студента DELETE http://localhost:8081/el-school/students/id
Для работы схемами базы данных использовал flyway
Перед тем как запускать Спринг, откройте базу по названию ***school***
А за тем flyway-migrate чтобы создать схему
А уже потом можна запускать Спринг
