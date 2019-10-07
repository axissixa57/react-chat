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
        // если это не авторизация
        !isAuth &&
        // и пароль не совпадает регулярке. в пароле должна быть как минимум маленькая, большая буква eng, цифра и длина > 8
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Слишком лёгкий пароль";
      }
    },
    password_2: value => {
      if (!isAuth && value !== values.password) {
        errors.password_2 = "Пароли не совпадают";
      } else if (!value) {
        errors.password_2 = "Введите пароль";
      }
    },
    fullname: value => {
      if (!isAuth && !value) {
        errors.fullname = "Укажите свое имя и фамилию";
      }
    }
  };
  // values - это объект из Formik, в кот. содержится имена(id) input-ов формы, типо email, password
  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
