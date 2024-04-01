import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
const baseUrl = process.env["BASE_URL"];

const getUrl = (endpointUrl: string) => {
  const url = `http://127.0.0.1:5000/${endpointUrl}`;
  return url;
};
type ResponseType<T> = {
  data: T;
  status: Object;
  statusText: string;
};
const getReturnResponse = <T>(response: AxiosResponse<any, any>) => {
  const customResponse: ResponseType<T> = {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
  };
  return customResponse;
};
export const get = async <T>(url: string) => {
  const token = Cookies.get("currentToken");
  const header = {
    // "Content-type": "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const res = await axios.get(getUrl(url), {
    // headers: header,
  });
  return getReturnResponse<T>(res);
};
