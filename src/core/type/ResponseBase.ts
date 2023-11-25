export type ResponseBase<T> = {
  status: string;
  data: T;
  message: string;
};
