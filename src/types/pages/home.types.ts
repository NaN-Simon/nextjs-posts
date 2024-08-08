import { NextPageContext } from "next";

interface ExtendedURLSearchParams extends URLSearchParams {
    page?: string;
  }
  
 export interface ExtendedNextPageContext extends NextPageContext {
    searchParams: ExtendedURLSearchParams;
  }