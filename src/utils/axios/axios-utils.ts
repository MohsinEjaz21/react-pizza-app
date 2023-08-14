import { Constants } from "../constants";

const headers = {
  "Accept": "*/*",
  'Content-Type': 'application/json',
}

const getRequestMeta = (params) => {
  let apiUrl = Constants.DX_URL;

  if (params?.headers?.["Content-Type"]) {
    headers["Content-Type"] = params.headers["Content-Type"];
  }
  return {
    headers,
    apiUrl
  }
}

export const AxiosUtils = { getRequestMeta };
