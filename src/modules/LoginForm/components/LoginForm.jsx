import React, { Component } from 'react'
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from '../../../components';

class LoginForm extends Component {
    render() {
        {/* вся форма заимствована из https://ant.design/components/form/ для неё необходимо делать классовую компоненту */ }
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        {/* hasFeedback validateStatus="success" для отображения иконки кружка с галочкой  */}
                        <Form.Item hasFeedback validateStatus="success">
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">
                                Войти в аккаунт
                                </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to='/register'>Зарегистрироваться</Link>
                    </Form>
                </Block>
            </div>
        )
    }
}

export default LoginForm;