import axios from "axios";

export const serverURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_SERVER
    : process.env.SERVER;

export default axios.create({
  baseURL: serverURL,
});
