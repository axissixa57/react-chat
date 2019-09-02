This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Остановился на 2 части https://www.youtube.com/channel/UCdldbhAwO16vjnDwACTs5gQ 1:50:00
GIT проекта автора: https://github.com/Archakov06/react-chat-tutorial

### `yarn`

yarn add node-sass - нужен для того чтобы работать с scss стилями
yarn add react-styleguidist - библиотека компонентов, для взаимодействия дизайнера и программиста 
yarn add antd - https://ant.design/
yarn add classnames - библиотека для скрепления классов require('classnames')('foo', 'bar'); // => 'foo bar'
yarn add date-fns - для работы с датой, хороша тем, что используется декларативный подход, т.е. позволяет взять конкретную ф-цию из библиотеки, а не полное подключение, что хорошо скажется на размере bundle из webpack
yarn add reset-css - для очистки стандартных стилей применённых браузером

### `npx`

npx styleguidist server - для отображения библиотека компонентов - http://localhost:6060/

### `components`

файл index.js - точка для подключения всех компонентов

### `Front`

https://ant.design/ - типо bootstrap (можно ещё рассмотреть https://material-ui.com/)

### scss 

_variables.scss - файл, кот. нужен для хранения переменных со значением, кот. будут использоваться в других файлах через @import 

### webpack 
...
alias: {
    styles: path.join(paths.appSrc, 'styles') 

    <!-- - вставляем доп. строчку для удобного обращения к файлам scss:
    - @import '~styles/variables'; 
    вместо, например @import '../../styles/variables';
    Для применения изменения : перезагружка npm start -->
}
...