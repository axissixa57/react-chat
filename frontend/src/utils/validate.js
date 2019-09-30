export default ({ isAuth, values, errors }) => {
    const rules = {
        email: value => {
            if (!value) {
                errors.email = "Введите E-Mail";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = "Неверный E-Mail";
            }
        },
        password: value => {
            if (!value) {
                errors.password = "Введите пароль";
            } else if (
                // в пароле должна быть как минимум маленькая, большая буква, цифра и знак символа из перечисленных
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
            ) { 
                errors.password = isAuth ? "Неверный пароль" : "Слишком лёгкий пароль";
            }
        }
    };
    // values - это объект из Formik, в кот. содержится имена(id) input-ов формы, типо email, password
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};