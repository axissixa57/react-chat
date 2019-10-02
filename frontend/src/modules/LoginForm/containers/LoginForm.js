import { withFormik } from "formik";
import { connect } from "react-redux";

import LoginForm from "../components/LoginForm";
import validateForm from "../../../utils/validate";
import { userActions } from "../../../redux/actions";

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  // пустые поля нужны для того чтобы когда делаем фокус на input-e, чтобы выскачила ошибка, без пустых полей будет как success
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),

  validate: values => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const { fetchUserLogin } = props;

    fetchUserLogin(values)
      .then(({status}) => {
        if(status === 'success') {
          props.history.push("/im");
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },

  displayName: "LoginForm"
})(LoginForm);

export default connect(
  null,
  userActions
)(LoginFormContainer);
