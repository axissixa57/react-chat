import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegisterForm } from '../../modules';
import CheckEmailInfo from "./components/CheckEmailInfo";

import './Auth.scss';

class Auth extends React.Component {
    render() {
        return (
            <section className="auth">
                <div className="auth__content">
                    <Route exact path={['/', '/login']} component={LoginForm} />
                    <Route exact path='/register' component={RegisterForm} />
                    <Route exact path="/register/verify" component={CheckEmailInfo} />
                </div>
            </section>
        )
    }
}

export default Auth;
