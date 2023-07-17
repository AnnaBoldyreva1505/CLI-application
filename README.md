1. # Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list

![Image alt]https://github.com/AnnaBoldyreva1505/hw-nodejs-1/raw/main/screens/list.png


2. # Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6

![Image alt]https://github.com/AnnaBoldyreva1505/hw-nodejs-1/raw/main/screens/2.png


3. # Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH

![Image alt]https://github.com/AnnaBoldyreva1505/hw-nodejs-1/raw/main/screens/3.png

4. # Добавляем контакт и выводим в консоль созданный контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22


![Image alt]https://github.com/AnnaBoldyreva1505/hw-nodejs-1/raw/main/screens/4.png

