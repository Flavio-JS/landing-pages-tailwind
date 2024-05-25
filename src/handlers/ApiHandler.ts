import { AxiosResponse } from "axios";

export const exportData = <T>(e: AxiosResponse<T>) => e.data;

export const forceNullBody = <T>(e: AxiosResponse<T>) =>
  e.data ? e : { ...e, data: null };
