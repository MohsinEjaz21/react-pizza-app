import { AxiosUtils } from "@src/utils/axios/axios-utils";
import axios, { AxiosResponse } from "axios";

const IPUT = {
  url: "",
  body: {},
  headers: {},
  requestParams: {},
}

export default function PUT<T>(params = IPUT as Partial<typeof IPUT>) {
  const { headers, apiUrl } = AxiosUtils.getRequestMeta(params);

  return axios({
    withCredentials: true,
    responseType: "json",
    params: params.requestParams,
    headers: headers,
    method: "PUT",
    url: `${apiUrl}${params.url}`,
    data: params.body,
  })  as Promise<AxiosResponse<T>>;
}


