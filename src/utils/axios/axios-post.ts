import { AxiosUtils } from "@src/utils/axios/axios-utils";
import axios, { AxiosResponse } from "axios";

const IPut = {
  url: "",
  body: {},
  headers: {},
  requestParams: {},
}

export default function POST<T>(params = IPut as Partial<typeof IPut>) {
  const { headers, apiUrl } = AxiosUtils.getRequestMeta(params);

  return axios({
    withCredentials: true,
    responseType: "json",
    params: params.requestParams,
    headers: headers,
    method: "POST",
    url: `${apiUrl}${params.url}`,
    data: params.body,
  })as Promise<AxiosResponse<T>>;
}


