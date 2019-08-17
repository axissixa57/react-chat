import React from 'react';
import { Form, Icon, Input, Checkbox } from 'antd';
import { Block, Button } from '../../components';

import './Auth.scss';

class Auth extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        // type='primary' size='large' - это всё библиотека antd
        const { getFieldDecorator } = this.props.form;
        return (
            <section className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста войдите в свой аккаунт</p>
                    </div>
                    <Block>
                        {/* вся форма заимствована из https://ant.design/components/form/ для неё необходимо делать классовую компоненту */}
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            {/* hasFeedback validateStatus="success" для отображения иконки кружка с галочкой  */}
                            <Form.Item hasFeedback validateStatus="success">
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        size="large"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" size="large">
                                    Войти в аккаунт
                                </Button>
                            </Form.Item>
                            <a className="auth__register-link" href="#">Зарегистрироваться</a>
                        </Form>
                    </Block>
                </div>
            </section>
        )
    }

}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Auth);

export default WrappedNormalLoginForm;
