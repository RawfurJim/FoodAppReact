import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.common["customer-auth-token"] = localStorage.getItem(
  "token"
);

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("logging", error);
    toast("unexpected error");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
