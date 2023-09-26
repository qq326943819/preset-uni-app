import Service from "luch-request";

const request = new Service({
  baseURL: import.meta.env.VITE_API_HOST,
});

export default request;
