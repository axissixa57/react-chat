import { withFormik } from 'formik';

import RegisterForm from '../components/RegisterForm';
import validateForm from '../../../utils/validate';

export default withFormik({
    enableReinitialize: true,
    
    mapPropsToValues: () => ({
        email: "",
        fullname: "",
        password: "",
        password2: ""
    }),
    // values - это объект, кот. предоставляет Formik в нём хранится ключ - id inut-ов, значение - текст input-a (email, password)
    validate: values => {
        let errors = {};

        validateForm({ isAuth: false, values, errors });

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);