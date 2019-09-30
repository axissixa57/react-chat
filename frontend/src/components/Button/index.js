import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton } from 'antd'; // из библиотеки типо бутстрап взяли готовую кнопку, работает благодаря index.scss 
import classNames from 'classnames';

import './Button.scss';

const Button = props => { 
    // props.className - присвоит родительский класс
    // {...props} лучше ставить вначале, чтоб не перетирать добавленные атрибуты, кот. стоят вместе
    return (
        <div>
            <BaseButton {...props} className={classNames('button', props.className, {
                "button--large": props.size === 'large'
            })} ></BaseButton>
        </div>
    )
}

Button.propTypes = {
    className: PropTypes.string
};

export default Button;
