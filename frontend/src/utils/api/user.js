import { axios } from "../../core";

export default {
  signIn: postData => axios.post("/user/login", postData),
  signUp: postData => axios.post("/user/registration", postData),
  verifyHash: hash => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get("/user/me"),
  findUsers: query => axios.get("/user/find?query=" + query),
};
