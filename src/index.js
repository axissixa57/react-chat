import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './styles/index.scss'; // библиотеки antd, в самом файле происходит подключение, кот. будет доступно всем компонентам

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);