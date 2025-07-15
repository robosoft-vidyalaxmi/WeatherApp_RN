export type Method = "post" | "get" | "put" | "delete" | "patch";

export interface Endpoints {
  [key: string]: HttpDefaultParams;
}

export interface HttpDefaultParams {
  url: string;
  method: Method;
}
