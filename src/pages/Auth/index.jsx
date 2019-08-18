import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegisterForm } from '../../modules';

import './Auth.scss';

class Auth extends React.Component {
    render() {
        // type='primary' size='large' - это всё библиотека antd
        return (
            <section className="auth">
                <div className="auth__content">
                    <Route exact path={['/', '/login']} component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                </div>
            </section>
        )
    }
}

export default Auth;
