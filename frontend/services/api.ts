import axios from "axios";

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
