import { openNotification } from "../../utils/helpers";
import { userApi } from "../../utils/api";

const actions = {
  setUserData: data => ({
    type: "USER:SET_DATA",
    payload: data
  }),
  fetchUserLogin: postData => dispatch => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { status } = data;
        if (status === "error") {
          openNotification({
            title: "Ошибка при авторизации!",
            text: "Неверный логин или пароль.",
            type: "error"
          });
        } else {
          openNotification({
            title: "Отлично!",
            text: "Авторизация успешна.",
            type: "success"
          });
        }

        return data;
      })
      .catch(({ response }) => {
        if (response.status === 404) {
          openNotification({
            title: "Ошибка при авторизации",
            text: "Неверный логин или пароль",
            type: "error"
          });
        }
      });
  }
};

export default actions;
