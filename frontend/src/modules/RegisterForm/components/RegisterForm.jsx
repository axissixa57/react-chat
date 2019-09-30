import React from 'react'
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components';
import { validateField } from '../../../utils/helpers';

const success = false; // если регистрация не прошла то компонента не отрисуется

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    // вся форма заимствована из https://ant.design/components/form/

    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ?
                    <Form onSubmit={handleSubmit} className="login-form">
                        {/* hasFeedback validateStatus="success" для отображения иконки кружка с галочкой  */}
                        <Form.Item
                            hasFeedback
                            validateStatus={
                                validateField("email", touched, errors)
                            }
                            help={!touched.email ? '' : errors.email}
                        >
                            <Input
                                id="email"
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-Mail"
                                size="large"
                                // сюда придёт значение из ф-ции mapPropsToValues из контейнерной компоненты
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="text"
                                placeholder="Ваше имя"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            validateStatus={
                                validateField("password", touched, errors)
                            }
                            help={!touched.password ? '' : errors.password}
                        >
                            <Input
                                id="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Пароль"
                                size="large"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                            <Button type="primary" size="large" onClick={handleSubmit}>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className="auth__register-link" to='/login'>Войти в аккаунт</Link>
                    </Form>
                    : <div className="auth__success-block">
                        <div>
                            <Icon type="info-circle" theme="twoTone" />
                        </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отправлено письмо с сылкой на подтверждение аккаунта</p>
                    </div>
                }
            </Block>
        </div>
    )

}

export default RegisterForm;