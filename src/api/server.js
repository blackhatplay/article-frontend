import axios from "axios";

export const serverURL = process.env.REACT_APP_SERVER;

export default axios.create({
  baseURL: serverURL,
});
