import { axios } from "../../core";

export default {
  signIn: postData => axios.post("/user/login", postData),
  getMe: () => axios.get("/user/me"),
};
