import { withFormik } from "formik";
import { connect } from "react-redux";

import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../utils/validate";
import { userActions } from "../../../redux/actions";
import { openNotification } from "../../../utils/helpers";

const RegisterFormContainer = withFormik({
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    password_2: ""
  }),
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
          openNotification({
            title: "Отлично!",
            text: "Регистрация успешна.",
            type: "success"
          });

          props.history.push("/register/verify");
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
