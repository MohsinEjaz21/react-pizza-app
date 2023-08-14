import { AxiosUtils } from "@src/utils/axios/axios-utils";
import axios, { AxiosResponse } from "axios";

const IGET = {
  url: "",
  requestParams: {},
  headers: {},
}

export default function GET<T>(params = IGET as Partial<typeof IGET>) {
  const { headers, apiUrl } = AxiosUtils.getRequestMeta(params);
  return axios({
    withCredentials: true,
    responseType: "json",
    headers: headers,
    method: "GET",
    params: params.requestParams,
    url: `${apiUrl}${params.url}`,
  }) as Promise<AxiosResponse<T>>;
}
