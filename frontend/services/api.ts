import axios, { AxiosError } from "axios";

export const api = axios.create({ baseURL: process.env.BACKEND_URL });

export interface PaginationDTO<T> {
  numberOfElements: number;
  totalElements: number;
  page: number;
  totalPages: number;
  hasContent: boolean;
  nextPage: boolean;
  previousPage: any;
  content: T[];
}

export function castRequestError(err: any) {
  if (err instanceof AxiosError) {
    return Response.json(err.response?.data, {
      status: err.response?.status,
      statusText: err.response?.statusText,
    });
  }
  return Response.json(
    { message: err.message },
    {
      status: 500,
      statusText: "SERVER_ERROR",
    }
  );
}
