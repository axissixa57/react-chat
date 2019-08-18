import React, { Component } from 'react'
import { Form, Icon, Input } from 'antd';
import { Link, Route } from 'react-router-dom';


import { Button, Block } from '../../../components';

class RegisterForm extends Component {
    render() {
        {/* вся форма заимствована из https://ant.design/components/form/ для неё необходимо делать классовую компоненту */ }
        return (
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        {/* hasFeedback validateStatus="success" для отображения иконки кружка с галочкой  */}
                        <Form.Item hasFeedback validateStatus="success">
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-Mail"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Ваше имя"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Пароль"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Повторите пароль"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to='/login'>Войти в аккаунт</Link>
                    </Form>
                </Block>
            </div>
        )
    }
}

export default RegisterForm;