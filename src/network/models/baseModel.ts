export interface BaseResponse<T> {
  status: string;
  errorCode: number;
  data: T;
}
