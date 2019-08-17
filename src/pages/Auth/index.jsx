import React from 'react';
import { Input } from 'antd';
import { Block, Button } from '../../components';

import './Auth.scss';

const Auth = () => {
    // type='primary' size='large' - это всё библиотека antd
    return (
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Input/>
                    <Button type='primary' size='large'>This is Button</Button>
                </Block>
            </div>
        </section>
    )
}

export default Auth
