export interface Response<T> {
  data: any;
  message?: string;
  date: T;
}
