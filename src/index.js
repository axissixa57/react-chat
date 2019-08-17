import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/index.scss'; // библиотеки antd, в самом файле происходит подключение, кот. будет доступно всем компонентам

ReactDOM.render(<App />, document.getElementById('root'));