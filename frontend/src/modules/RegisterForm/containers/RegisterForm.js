import { withFormik } from "formik";
import { connect } from "react-redux";

import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../utils/validate";
import { userActions } from "../../../redux/actions";

const RegisterFormContainer = withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    password_2: ""
  }),
  // values - это объект, кот. предоставляет Formik в нём хранится ключ - id inut-ов, значение - текст input-a (email, password)
  validate: values => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const { fetchUserRegister } = props;

    fetchUserRegister(values)
      .then(({ status }) => {
        if (status === "success") {
          props.history.push("/im");
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },

  displayName: "RegisterForm"
})(RegisterForm);

export default connect(
  null,
  userActions
)(RegisterFormContainer);
